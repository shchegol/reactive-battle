import { Request, Response, NextFunction } from 'express';

class ErrorHandler extends Error {
  statusCode: number;

  message: string;

  canShow: boolean;

  constructor(statusCode: number, message: string, canShow?: boolean) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.canShow = !!canShow;
  }
}

const handleError = (err: ErrorHandler, res: Response) => {
  // eslint-disable-next-line prefer-const
  let { statusCode, message, canShow } = err;

  if (process.env.NODE_ENV === 'production' && !canShow) {
    statusCode = 500;
    message = 'Internal server error';
  }

  if (!statusCode) {
    statusCode = 500;
  }

  res
    .status(statusCode)
    .json({
      status: 'error',
      statusCode,
      message,
    });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: any, _req: Request, res: Response, _next: NextFunction) => {
  handleError(err, res);
};

export {
  ErrorHandler,
  handleError,
};
