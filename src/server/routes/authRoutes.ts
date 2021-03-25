import { Router } from 'express';
import { User } from '@server/models/user';
import { API_URL } from '@root/constants';
import { auth } from '@server/middlewares/auth';

export const authRoutes = (router: Router) => {
  const authRouter: Router = Router();

  authRouter.post('/signup', (req, res, next) => {
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      login, email, first_name, second_name, password,
    } = req.body;

    User.create({
      login,
      email,
      first_name,
      second_name,
      password,
    })
      .then((user) => {
        console.log('signup then', user.get('id'));
        console.log('signup session', req.session);
        req.session.user = { id: user.get('id') };

        res.send('ok');
      })
      .catch(next);
  });

  authRouter.post('/signin', (req, res, next) => {
    const { login, password } = req.body;

    User
      .findOne({ where: { login } })
      .then((user) => {
        console.log('signin then', user);

        if (!user) {
          next({ status: 404, message: 'Not found' });
        } else if (!user.validPassword(password)) {
          next({ status: 400, message: 'Login or password is not valid' });
        } else {
          req.session.user = { id: user.get('id') };

          res.send('ok');
        }
      })
      .catch(next);
  });
  //
  authRouter.get('/user', auth, (req, res, next) => {
    // @ts-ignore
    const { id } = req.session.user;

    User
      .findOne({ where: { id } })
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
