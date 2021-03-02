import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Topic } from '../models/topic';
import { Comment } from '../models/comment';

const {
  POSTGRES_HOST: host,
  POSTGRES_PORT: port,
  POSTGRES_USER: username,
  POSTGRES_PASSWORD: password,
  POSTGRES_DB: database,
} = process.env;

const sequelizeOptions: SequelizeOptions = {
  username,
  password,
  database,
  host,
  port: parseInt(<string>port, 10),
  dialect: 'postgres',
  models: [Topic, Comment],
};

export const sequelize = new Sequelize(sequelizeOptions);
