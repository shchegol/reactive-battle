import AuthAPI from '@api/AuthAPI';
import yandexAxios from '@utils/yandexApiRequest';
import { Request, Response, NextFunction } from 'express';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { cookie } = req.headers;
  const options = {
    headers: {
      cookie,
    },
  };

  yandexAxios.get(`${AuthAPI.prefix}/user`, options)
    .then((data) => {
      res.locals.user = data;
      next();
    })
    .catch(() => {
      res.status(401).send({ reason: 'Cookie is not valid' });
    });
};
