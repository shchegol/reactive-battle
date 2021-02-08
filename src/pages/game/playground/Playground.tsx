import React, { FC, useEffect, useRef } from 'react';
import { CANVAS_HEIGHT, CANVAS_WIDTH, scene } from '@engine/Scene';
import { spritesSheet } from '@engine/SpritesSheet';
import { spritesManager } from '@engine/SpritesManager';
import KeyboardManager from '@engine/KeyboardManager';
import CollisionManager from '@engine/CollisionManager';
import { GameStates } from '@engine/types/GameStates';
import { EngineBus, GAME_PAUSE, GAME_RESUME } from '@engine/EngineBus';
import { gameControl } from '@engine/GameControl';

type PlaygroundProps = {
  state: GameStates;
};

const Playground: FC<PlaygroundProps> = ({ state = GameStates.NotStarted }) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    spritesSheet.init();
    spritesManager.init();
    KeyboardManager.init();
    CollisionManager.init();
    scene.init();
    gameControl.init();
  }, []);

  useEffect(() => {
    const ctx = canvas?.current?.getContext('2d');
    let requestId = 0;

    const render = () => {
      if (ctx && canvas.current) {
        scene.render(ctx);
      }

      requestId = requestAnimationFrame(render);
    };

    render();
    KeyboardManager.init();

    return () => {
      KeyboardManager.destroy();
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
