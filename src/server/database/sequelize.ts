import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Topic } from '../models/topic';
import { User } from '../models/user';
import { Comment } from '../models/comment';

const sequelizeOptions: SequelizeOptions = {
  host: '172.18.0.1',
  port: 5432,
  username: 'postgres',
  password: 'newPassword',
  database: 'reactive-battle',

  dialect: 'postgres',
  models: [User, Topic, Comment],
};

export const sequelize = new Sequelize(sequelizeOptions);
