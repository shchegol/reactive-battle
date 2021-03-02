import { API_URL } from '@root/constants';
import { Router } from 'express';
import Review from '../models/review';

export const reviewRouterFactory = (router: Router) => router

  .get(`${API_URL}/reviews/:login`, (req, res, next) => {
    Review.find({ login: req.params.login })
      .then((data) => res.json(data))
      .catch(next);
  })

  .post(`${API_URL}/reviews`, (req, res, next) => {
    const {
      login, name, email, text,
    } = req.body;
    new Review({
      login, name, email, text,
    }).save()
      .then((data) => res.json(data))
      .catch(next);
  });
