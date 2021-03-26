import { Router } from 'express';
import { API_URL } from '@root/constants';
import { auth } from '@server/middlewares/auth';
import { User } from '@server/models/user';
import { ErrorHandler } from '@server/middlewares/errors';

export const profileRoutes = (router: Router) => {
  const profileRouter: Router = Router();

  profileRouter.put('/profile', (req, res, next) => {
    const id = req.session.user?.id;
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      email, first_name, second_name, avatar,
    } = req.body;

    User.update(
      {
        email, first_name, second_name, avatar,
      },
      {
        where: { id },
        returning: true,
      },
    )
      .then((user) => res.json(user[1][0]))
      .catch(next);
  });

  profileRouter.put('/password', async (req, res, next) => {
    const id = req.session.user?.id;
    const { oldPassword, newPassword } = req.body;

    try {
      const user = await User.findOne({ where: { id } });

      if (!user) {
        throw new ErrorHandler(404, 'User is not found');
      }

      if (!user.isValidPassword(oldPassword)) {
        throw new ErrorHandler(400, 'Old password is not valid');
      }

      if (!User.isSavePassword(newPassword)) {
        throw new ErrorHandler(400, 'Password length must be longer than 3 symbols');
      }

      if (oldPassword === newPassword) {
        throw new ErrorHandler(400, 'The old password is the same as the new one');
      }

      await user.update(
        { oldPassword, newPassword },
        { where: { id } },
      );

      res.send('ok');
    } catch (error) {
      next(error);
    }
  });

  router.use(`${API_URL}/user`, auth, profileRouter);
};
