// import AuthAPI from '@api/AuthAPI';
// import apiRequest from '@utils/apiRequest';
import { Request, Response, NextFunction } from 'express';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (req.session.user && req.cookies.ssid) {
    next();
  } else {
    res.status(401).send({ reason: 'Cookie is not valid' });
  }

  // const { cookie } = req.headers;
  // const options = {
  //   headers: {
  //     cookie,
  //   },
  // };

  // apiRequest.get(`${AuthAPI.prefix}/user`, options)
  //   .then((data) => {
  //     res.locals.user = data;
  //     next();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     next();
  //     // res.status(401).send({ reason: 'Cookie is not valid' });
  //   });
};
