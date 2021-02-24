import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Topic } from '../models/topic';
import { Comment } from '../models/comment';

const {
  POSTGRES_USER: username,
  POSTGRES_PASSWORD: password,
  POSTGRES_DB: database,
} = process.env;

const sequelizeOptions: SequelizeOptions = {
  username,
  password,
  database,
  host: 'postgres',
  port: 5432,
  dialect: 'postgres',
  models: [Topic, Comment],
};

export const sequelize = new Sequelize(sequelizeOptions);
