import { Router } from 'express';
import { API_URL } from '@root/constants';
import { auth } from '@server/middlewares/auth';
import { ErrorHandler } from '@server/middlewares/errors';
import { Leaderboard } from '@server/models/leaderboard';
import { User } from '@server/models/user';

export const leaderboardRoutes = (router: Router) => {
  const leaderboardRouter: Router = Router();

  /**
   * Add user to leaderboard
   */
  leaderboardRouter.post('/', async (req, res, next) => {
    const userId = req.session.user?.id;
    const { score } = req.body;

    try {
      if (!userId) {
        throw new ErrorHandler(500, 'Session lost');
      }

      if (!score) {
        return next();
      }

      const leaderboard = await Leaderboard.findOne({ where: { userId } });

      if (leaderboard === null) {
        await Leaderboard.create({
          userId,
          score,
        } as Leaderboard);
      } else if (score > leaderboard.score) {
        await leaderboard.update(
          { score },
          { where: { userId } },
        );
      }

      res.send('ok');
    } catch (error) {
      next(error);
    }

    return next();
  });

  /**
   * Get all leaderboard
   */
  leaderboardRouter.post('/all', async (_req, res, next) => {
    Leaderboard.findAll({
      include: [
        {
          model: User,
          attributes: ['login'],
        },
      ],
    })
      .then((leaders) => res.json(leaders))
      .catch(next);
  });

  router.use(`${API_URL}/leaderboard`, auth, leaderboardRouter);
};
