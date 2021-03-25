import { Router } from 'express';
import errorsHandle from '@server/middlewares/errors';
import { API_URL } from '@root/constants';
import { commentRouterFactory } from './commentRouterFactory';
import { topicRouterFactory } from './topicRouterFactory';
import { themesRoutes } from './themesRoutes';
import { authRoutes } from './authRoutes';
import { userThemeRoutes } from './userThemeRoutes';

const router: Router = Router();

authRoutes(router);
commentRouterFactory(router);
topicRouterFactory(router);
themesRoutes(router);
userThemeRoutes(router);

router.use(`${API_URL}/*`, errorsHandle);

export default router;
