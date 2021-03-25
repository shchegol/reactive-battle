import { API_URL } from '@root/constants';
import { Router } from 'express';
import { UserTheme } from '@server/models/userTheme';
import { auth } from '@server/middlewares/auth';

export const userThemeRoutes = (router: Router) => {
  const userThemeRouter: Router = Router();

  /**
   * Set theme to user
   * @property {number} themeId - theme id
   * @property {string} ownerLogin - user login
   */
  userThemeRouter.post('/', (req, res, next) => {
    UserTheme
      .create(req.body)
      .then((userTheme) => res.json(userTheme))
      .catch(next);
  });

  /**
   * Get theme by user login
   * @param id - user id
   */
  userThemeRouter.get('/:login',
    (req, res, next) => {
      const userId = req.session.user?.id;

      UserTheme
        .findOrCreate({
          where: { userId },
          defaults: {
            themeId: 1,
            userId,
          } as UserTheme,
        })
        .then((userTheme) => res.json(userTheme[0]))
        .catch(next);
    });

  /**
   * Update theme by user id
   * @param id - user id
   * @property {number} themeId - theme id
   */
  userThemeRouter.patch('/:id', (req, res, next) => {
    const userId = req.session.user?.id;

    UserTheme.update(
      { themeId: req.body.themeId },
      { where: { userId } },
    )
      .then((userTheme) => res.json(userTheme))
      .catch(next);
  });

  router.use(`${API_URL}/user-themes`, auth, userThemeRouter);
};
