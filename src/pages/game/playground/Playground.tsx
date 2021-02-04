import React, { FC, useEffect, useRef } from 'react';
import Scene, { CANVAS_HEIGHT, CANVAS_WIDTH } from '@engine/Scene';
import { spritesSheet } from '@engine/SpritesSheet';
import { spritesManager } from '@engine/SpritesManager';
import KeyboardManager from '@engine/KeyboardManager';
import CollisionManager from '@engine/CollisionManager';

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
