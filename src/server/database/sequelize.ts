import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Topic } from '../models/topic';
import { Comment } from '../models/comment';

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'newPassword',
  database: 'reactive-battle',

  dialect: 'postgres',
  models: [Topic, Comment],
};

export const sequelize = new Sequelize(sequelizeOptions);
