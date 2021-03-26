import { Router } from 'express';
import errorsHandle from '@server/middlewares/errors';
import { API_URL } from '@root/constants';
import { authRoutes } from './authRoutes';
import { profileRoutes } from './profileRoutes';
import { commentRouterFactory } from './commentRouterFactory';
import { topicRouterFactory } from './topicRouterFactory';
import { themesRoutes } from './themesRoutes';
import { userThemeRoutes } from './userThemeRoutes';
import { leaderboardRoutes } from './leaderboardRoutes';

const router: Router = Router();

authRoutes(router);
profileRoutes(router);
commentRouterFactory(router);
topicRouterFactory(router);
themesRoutes(router);
userThemeRoutes(router);
leaderboardRoutes(router);

router.use(`${API_URL}/*`, errorsHandle);

export default router;
