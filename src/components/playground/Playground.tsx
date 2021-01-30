import { keyboardManager } from '@root/engine/KeyboardManager';
import Scene from '@root/engine/Scene';
import { spritesManager } from '@root/engine/SpritesManager';
import React, { FC, useEffect, useRef } from 'react';

const scene = new Scene();

const Playground: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    spritesManager.Init();
    keyboardManager.Init();
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

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return (
    <canvas
      ref={canvas}
      width={416}
      height={416}
      tabIndex={0}
    />
  );
};

export default Playground;
