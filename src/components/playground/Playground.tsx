import React, { FC, useEffect, useRef } from 'react';

const Playground: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvas?.current?.getContext('2d');
    ctx?.fillRect(0, 0, 800, 800);
    ctx?.stroke();
  });

  return (
    <canvas ref={canvas} width={800} height={800} />
  );
};

export default Playground;
