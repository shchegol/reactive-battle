import { Router } from 'express';
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

export default router;
