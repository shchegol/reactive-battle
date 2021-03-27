import { Router } from 'express';
import { API_URL } from '@root/constants';
import { auth } from '@server/middlewares/auth';
import { Comment } from '@server/models/comment';
import { User } from '@server/models/user';

export const commentRouterFactory = (router: Router) => router
  .get(`${API_URL}/comments`, auth, (_req, res, next) => {
    Comment.findAll({
      attributes: ['id', 'body', 'topicId', 'commentId', 'createdAt'],
      include: [
        {
          model: User,
          attributes: ['login'],
        },
      ],
    })
      .then((comments) => res.json(comments))
      .catch(next);
  })

  .get(`${API_URL}/comments/:id`, auth, (req, res, next) => {
    Comment.findByPk(req.params.id, {
      attributes: ['id', 'body', 'topicId', 'commentId', 'createdAt'],
      include: [
        {
          model: User,
          attributes: ['login'],
        },
      ],
    })
      .then((comment) => (comment
        ? res.json(comment)
        : next({ status: 404, message: `Comment id:${req.params.id} did not found` })))
      .catch(next);
  })

  .post(`${API_URL}/comments`, auth, (req, res, next) => {
    const userId = req.session.user?.id;
    const userLogin = req.session.user?.login;
    const { body, topicId, commentId } = req.body;

    Comment.create({
      topicId, commentId, userId, body,
    })
      .then((comment) => {
        res.json({
          id: comment.id,
          body: comment.body,
          commentId: comment.commentId,
          topicId: comment.topicId,
          createdAt: comment.createdAt,
          user: { login: userLogin },
        });
      })
      .catch(next);
  });
