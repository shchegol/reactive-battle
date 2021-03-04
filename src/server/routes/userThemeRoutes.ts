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
   * @param login - user login
   */
  userThemeRouter.get('/:login',
    (req, res, next) => UserTheme
      .findOrCreate({
        where: { ownerLogin: req.params.login },
        defaults: {
          themeId: 1,
          ownerLogin: req.params.login,
        } as UserTheme,
      })
      .then((userTheme) => res.json(userTheme[0]))
      .catch(next));

  /**
   * Update theme by user login
   * @param login - user login
   * @property {number} themeId - theme id
   */
  userThemeRouter.patch('/:login', (req, res, next) => {
    UserTheme.update(
      { themeId: req.body.themeId },
      { where: { ownerLogin: req.params.login } },
    )
      .then((userTheme) => res.json(userTheme))
      .catch(next);
  });

  router.use(`${API_URL}/user-themes`, auth, userThemeRouter);
};
