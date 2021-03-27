import { Router } from 'express';
import { API_URL } from '@root/constants';
import { Topic } from '@server/models/topic';
import { Comment } from '@server/models/comment';
import { auth } from '@server/middlewares/auth';
import { User } from '@server/models/user';

export const topicRouterFactory = (router: Router) => router
  .get(`${API_URL}/topics`, (_req, res, next) => {
    Topic.findAll({
      attributes: ['id', 'name', 'description'],
    })
      .then((topic) => res.json(topic))
      .catch(next);
  })

  .get(`${API_URL}/topics/:id`, auth, (req, res, next) => Topic.findByPk(req.params.id, {
    attributes: ['id', 'name', 'description'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'body', 'topicId', 'commentId', 'createdAt'],
        include: [
          {
            model: User,
            attributes: ['login'],
          },
        ],
      },
    ],
  })
    .then((topic) => (topic
      ? res.json(topic)
      : next({ status: 404, message: `Topic id:${req.params.id} did not found` })))
    .catch(next))

  .post(`${API_URL}/topics`, auth, (req, res, next) => {
    const userId = req.session.user?.id;
    const { name, description } = req.body;

    Topic.create({ userId, name, description })
      .then((topic) => {
        res.json({ id: topic.id, name: topic.name, description: topic.description });
      })
      .catch(next);
  });
