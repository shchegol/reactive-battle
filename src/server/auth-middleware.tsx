import AuthAPI from '@api/AuthAPI';
import yandexAxios from '@root/utils/yandexApiRequest';
// import cookieParser from 'cookie-parser';
import { Request, Response, NextFunction } from 'express';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { cookie } = req.headers;
  const options = {
    headers: {
      cookie,
    },
  };

  console.log(options);

  yandexAxios.get(`${AuthAPI.prefix}/user`, options)
    .then((data) => {
      res.locals.user = data;
      next();
    })
    .catch((e) => {
      console.log(e);
      res.status(401).send({ reason: 'Cookie is not valid' });
    });

  console.log(req.signedCookies);

  // const values = cookieParser.JSONCookies(req.cookies);

  // console.log(values);

  // const authData = {
  //   authCookie: values.authCookie,
  //   uuid: values.uuid,
  // };

  // console.log(authData);

  // const cookies = Object
  //   .entries(authData)
  //   .map(([key, value]) => `${key}=${value}`)
  //   .join(';');

  // try {
  //   const authRes = await yandexAxios.get(`${AuthAPI.prefix}/user`, {
  //     // headers: { Cookie: cookies },
  //   });

  //   console.log(authRes.status, authRes);

  //   //   authRes.status ===

  //   //   req.state.user = data;
  // } catch (err) {
  //   console.error(err);
  //   // ctx.state.user = null;
  // }

  // next();
};
