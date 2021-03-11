/* eslint-disable */
// @ts-nocheck
// todo не забыть убрать
import React, { FC, useEffect, useRef } from 'react';
import { CANVAS_HEIGHT, CANVAS_WIDTH, scene } from '@engine/Scene';
import { spritesSheet } from '@engine/SpritesSheet';
import { spritesManager } from '@engine/SpritesManager';
import KeyboardManager from '@engine/KeyboardManager';
import { gamepadManager } from '@engine/GamepadManager';
import CollisionManager from '@engine/CollisionManager';
import { GameStates } from '@engine/types/GameStates';
import {
  EngineBus,
  GAME_PAUSE,
  GAME_RESUME,
  GAMEPAD_CONNECTED,
  GAMEPAD_DISCONNECTED
} from '@engine/EngineBus';
import { gameControl } from '@engine/GameControl';
import useSnackbar from '@root/hooks/useSnackbar';

type PlaygroundProps = {
  state: GameStates;
};

const Playground: FC<PlaygroundProps> = ({ state = GameStates.NotStarted }) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    spritesSheet.init();
    spritesManager.init();
    scene.init();
    CollisionManager.init();
    gameControl.init();

    return () => {
      gameControl.pause();
    };
  }, []);

  useEffect(() => {
    if (state === GameStates.GameOver) {
      scene.onGameOver();
    }
  }, [state]);

  useEffect(() => {
    KeyboardManager.init();
    gamepadManager.init();

    EngineBus.on(GAMEPAD_CONNECTED, (e) => {showSnackbar(`Controller ${e.id} connected`)});
    EngineBus.on(GAMEPAD_DISCONNECTED, (e) => {showSnackbar(`Controller ${e.id} disconnected`)});

    return () => {
      KeyboardManager.destroy();
      gamepadManager.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = canvas?.current?.getContext('2d');
    let requestId = 0;

    const render = () => {
      if (ctx && canvas.current) {
        scene.render(ctx);
      }

      gamepadManager.updateState()

      requestId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  useEffect(() => {
    switch (state) {
      case GameStates.Pause:
        EngineBus.emit(GAME_PAUSE);
        break;

      case GameStates.Play:
        EngineBus.emit(GAME_RESUME);
        break;

      default:
        break;
    }
  }, [state]);

  return (
    <canvas
      ref={canvas}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      tabIndex={0}
    />
  );
};

export default Playground;
