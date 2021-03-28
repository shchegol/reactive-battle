import { Request, Response, NextFunction } from 'express';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (req.session.user && req.cookies.ssid) {
    next();
  } else {
    res.status(401).send({ reason: 'Cookie is not valid' });
  }
};
