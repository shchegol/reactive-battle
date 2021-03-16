import { Router } from 'express';
import errorsHandle from '@server/middlewares/errors';
import { API_URL } from '@root/constants';
import { reviewRouterFactory } from './reviewRouterFactory';
import { commentRouterFactory } from './commentRouterFactory';
import { topicRouterFactory } from './topicRouterFactory';
import { themesRoutes } from './themesRoutes';
import { userThemeRoutes } from './userThemeRoutes';

const router: Router = Router();

commentRouterFactory(router);
topicRouterFactory(router);
themesRoutes(router);
userThemeRoutes(router);
reviewRouterFactory(router);

router.use(`${API_URL}/*`, errorsHandle);

export default router;
