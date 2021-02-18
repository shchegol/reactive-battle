import {Router} from 'express';
import { User } from '../models/User';

export const userRouterFactory = () => Router()

    .get('/users', (_req, res, next) =>
      User.findAll()
        .then(users => res.json(users))
        .catch(next)
    )

    .get('/users/:id', (req, res, next) =>
      User.findByPk(req.params.id)
        .then(user => user
          ? res.json(user)
          : next({statusCode: 404}))
        .catch(next)
    )

    .post('/users', (req, res, next) =>
      {
        User.create(req.body)
        .then(user => res.json(user))
        .catch(next)}
    )

;
