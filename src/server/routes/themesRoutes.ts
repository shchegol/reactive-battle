import { Router } from 'express';
import { SiteTheme } from '@server/models/siteTheme';
import { API_URL } from '@root/constants';
import { auth } from '@server/middlewares/auth';

export const themesRoutes = (router: Router) => {
  const themesRouter: Router = Router();

  /**
   * Get all themes
   */
  themesRouter.get('/', (_req, res, next) => SiteTheme.findAll()
    .then((siteTheme) => res.json(siteTheme))
    .catch(next));

  /**
   * Create new theme
   * @property {string} theme - theme name
   * @property {string} description - theme description
   */
  themesRouter.post('/', (req, res, next) => {
    SiteTheme.create(req.body)
      .then((siteTheme) => res.json(siteTheme))
      .catch(next);
  });

  router.use(`${API_URL}/themes`, auth, themesRouter);
};
