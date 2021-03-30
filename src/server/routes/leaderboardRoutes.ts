import { Router } from 'express';
import { API_URL } from '@root/constants';
import { auth } from '@server/middlewares/auth';
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
  leaderboardRouter.post('/all', (_req, res, next) => {
    Leaderboard.findAll({
      attributes: ['score'],
      include: [
        {
          model: User,
          attributes: ['login'],
        },
      ],
    })
      .then((leaders) => leaders.sort((a, b) => {
        if (a.score === b.score) return 0;
        return a.score < b.score ? 1 : -1;
      }))
      .then((leaders) => res.json(leaders))
      .catch(next);
  });

  router.use(`${API_URL}/leaderboard`, auth, leaderboardRouter);
};
