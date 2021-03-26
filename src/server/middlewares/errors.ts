import { Request, Response, NextFunction } from 'express';

class ErrorHandler extends Error {
  statusCode: number;

  message: string;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err: ErrorHandler, res: Response) => {
  const { statusCode, message } = err;

  console.log(err);

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
  if (process.env.NODE_ENV === 'production') {
    const fakeError = new ErrorHandler(500, 'Internal server error');
    handleError(fakeError, res);
  } else {
    handleError(err, res);
  }
};

export {
  ErrorHandler,
  handleError,
};
