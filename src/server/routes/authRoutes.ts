import { Router } from 'express';
import { User } from '@server/models/user';
import { API_URL } from '@root/constants';
import { auth } from '@server/middlewares/auth';
import { ErrorHandler } from '@server/middlewares/errors';

export const authRoutes = (router: Router) => {
  const authRouter: Router = Router();

  authRouter.post('/signup', (req, res, next) => {
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      login, email, first_name, second_name, password,
    } = req.body;

    if (!User.isSavePassword(password)) {
      throw new ErrorHandler(400, 'Password length must be longer than 3 symbols', true);
    }

    if (login.length < 3 && login.length > 15) {
      throw new ErrorHandler(400, 'Login length must be longer than 3 and shorter than 15 symbols', true);
    }

    User
      .create({
        login,
        email,
        first_name,
        second_name,
        password,
      })
      .then((user) => {
        const { id: userId, login: userLogin } = user;
        req.session.user = { id: userId, login: userLogin };

        res.send('ok');
      })
      .catch(next);
  });

  authRouter.post('/signin', (req, res, next) => {
    const { login, password } = req.body;

    User
      .findOne({ where: { login } })
      .then((user) => {
        if (!user || !user.isValidPassword(password)) {
          throw new ErrorHandler(400, 'Login or password is not valid', true);
        }

        const { id: userId, login: userLogin } = user;
        req.session.user = { id: userId, login: userLogin };

        res.send('ok');
      })
      .catch(next);
  });

  authRouter.get('/user', auth, (req, res, next) => {
    const id = req.session.user?.id;

    User
      .findOne({
        attributes: ['id', 'email', 'login', 'first_name', 'second_name', 'avatar'],
        where: { id },
      })
      .then((user) => {
        if (!user) {
          next({ status: 404, message: 'Not found' });
        }

        res.json(user);
      })
      .catch(next);
  });

  authRouter.post('/logout', auth, (req, res) => {
    if (req.session.user && req.cookies.ssid) {
      res.clearCookie('ssid');
    }

    res.send('ok');
  });

  router.use(`${API_URL}/auth`, authRouter);
};
