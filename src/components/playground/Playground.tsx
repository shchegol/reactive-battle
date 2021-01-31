import CollisionManager from '@engine/CollisionManager';
import { spritesSheet } from '@engine/SpritesSheet';
import KeyboardManager from '@root/engine/KeyboardManager';
import Scene, { CANVAS_HEIGHT, CANVAS_WIDTH } from '@root/engine/Scene';
import { spritesManager } from '@root/engine/SpritesManager';
import React, { FC, useEffect, useRef } from 'react';

const scene = new Scene();

const Playground: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    spritesSheet.init();
    spritesManager.init();
    KeyboardManager.init();
    CollisionManager.init();
    scene.init();
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
  });

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
