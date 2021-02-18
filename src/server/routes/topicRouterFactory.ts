import { Router } from 'express';
import { Topic } from '../models/topic';
import { User } from '../models/user';
import { Comment } from '../models/comment';

export const topicRouterFactory = () => Router()

  .get('/topics', (_req, res, next) => Topic.findAll()
    .then((topic) => res.json(topic))
    .catch(next))

  .get('/topics/:id', (req, res, next) => Topic.findByPk(req.params.id, {
    include: [
      {
        model: User,
      },
      {
        model: Comment,
      },
    ],
  })
    .then((topic) => (topic
      ? res.json(topic)
      : next({ statusCode: 404 })))
    .catch(next))

  .post('/topics', (req, res, next) => {
    Topic.create(req.body)
      .then((topic) => res.json(topic))
      .catch(next);
  });
