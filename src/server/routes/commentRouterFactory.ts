import { API_URL } from '@root/constants';
import { Router } from 'express';
import { auth } from '../auth-middleware';
import { Comment } from '../models/comment';

export const commentRouterFactory = () => Router()

  .get(`${API_URL}/comments`, auth, (_req, res, next) => Comment.findAll()
    .then((comment) => res.json(comment))
    .catch(next))

  .get(`${API_URL}/comments/:id`, auth, (req, res, next) => Comment.findByPk(req.params.id)
    .then((comment) => (comment
      ? res.json(comment)
      : next({ statusCode: 404 })))
    .catch(next))

  .post(`${API_URL}/comments`, auth, (req, res, next) => {
    Comment.create(req.body)
      .then((comment) => res.json(comment))
      .catch(next);
  });
