import { API_URL } from '@root/constants';
import { Router } from 'express';
import { Comment } from '../models/comment';

export const commentRouterFactory = () => Router()

  .get(`${API_URL}/comments`, (_req, res, next) => Comment.findAll()
    .then((comment) => res.json(comment))
    .catch(next))

  .get(`${API_URL}/comments/:id`, (req, res, next) => Comment.findByPk(req.params.id)
    .then((comment) => (comment
      ? res.json(comment)
      : next({ statusCode: 404 })))
    .catch(next))

  .post(`${API_URL}/comments`, (req, res, next) => {
    Comment.create(req.body)
      .then((comment) => res.json(comment))
      .catch(next);
  });
