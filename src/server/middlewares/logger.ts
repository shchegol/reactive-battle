import { Request, Response, NextFunction } from 'express';

const dateFormat = () => {
  const padStart = (num: number) => String(num).padStart(2, '0');

  const now = new Date();
  const year = now.getFullYear();
  const month = padStart(now.getMonth() + 1);
  const day = padStart(now.getDay());
  const hour = padStart(now.getHours());
  const minute = padStart(now.getMinutes());
  const second = padStart(now.getSeconds());

  return `[${year}-${month}-${day} ${hour}:${minute}:${second}]`;
};

export default (req: Request, res: Response, next: NextFunction) => {
  const opt = {
    logTime: true,
    log: (info: string) => console.log(info),
  };

  const start = Date.now();

  opt.log(`${opt.logTime ? dateFormat() : ''} \x1b[32m<--\x1b[0m ${req.method} ${req.originalUrl}`);

  next();

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const onfinish = done.bind(null, 'finish');
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const onclose = done.bind(null, 'close');

  res.once('finish', onfinish);
  res.once('close', onclose);

  function done(event: string) {
    res.removeListener('finish', onfinish);
    res.removeListener('close', onclose);
    const upstream = event === 'close' ? '\x1b[31m-x-\x1b[0m' : '\x1b[32m-->\x1b[0m';
    const delta = Date.now() - start;
    const time = delta > 1000 ? `${Math.round(delta / 1000)}s` : `${delta}ms`;

    opt.log(`${opt.logTime ? dateFormat() : ''} ${upstream} ${req.method} ${req.originalUrl} \x1b[33m${res.statusCode || 404}\x1b[0m ${time}`);
  }
};
