import { Router } from 'express';
import { SiteTheme } from '@server/models/siteTheme';
import { API_URL } from '@root/constants';
// import { auth } from '@server/middlewares/auth';

export const themesRoutes = (router: Router) => {
  const themesRouter: Router = Router();

  /**
   * Get themes
   * By default returns array of all themes
   *
   * @property {number|undefined} id - theme id
   * @property {string|undefined} name - theme name
   *
   * @return {SiteTheme | SiteTheme[]}
   */
  themesRouter.get('/', async (req, res, next) => {
    const { id, name } = req.query;
    let resDB;

    try {
      if (id) {
        resDB = await SiteTheme.findByPk(`${id}`);
      } else if (name) {
        resDB = await SiteTheme.findOne({
          where: {
            theme: `${name}`,
          },
        });
      } else {
        resDB = await SiteTheme.findAll();
      }

      res.json(resDB);
    } catch (error) {
      if (error) {
        next();
      }
    }
  });

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

  router.use(`${API_URL}/themes`, themesRouter);
};
