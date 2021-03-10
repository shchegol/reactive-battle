import { Router } from 'express';
import { API_URL } from '@root/constants';
import { Topic } from '@server/models/topic';
import { Comment } from '@server/models/comment';
import { auth } from '@server/middlewares/auth';

export const topicRouterFactory = (router: Router) => router
  .get(`${API_URL}/topics`, (_req, res, next) => Topic.findAll()
    .then((topic) => res.json(topic))
    .catch(next))

  .get(`${API_URL}/topics/:id`, auth, (req, res, next) => Topic.findByPk(req.params.id, {
    include: [
      {
        model: Comment,
        required: false,
      },
    ],
  })
    .then((topic) => (topic
      ? res.json(topic)
      : next({ status: 404, message: `Topic id:${req.params.id} did not found` })))
    .catch(next))

  .post(`${API_URL}/topics`, auth, (req, res, next) => {
    Topic.create(req.body)
      .then((topic) => res.json(topic))
      .catch(next);
  });
