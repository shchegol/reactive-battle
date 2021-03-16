import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: any, _req: Request, _res: Response, _next: NextFunction) => {
  _res.status(err.status || 501);

  if (process.env.NODE_ENV === 'production') {
    _res.send('Something went wrong...');
  } else {
    _res.json({
      status: err.status || err.statusCode,
      message: err.message,
      stack: err.stack,
    });
  }
};
