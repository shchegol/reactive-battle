import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Topic } from '../models/topic';
import { Comment } from '../models/comment';
import { SiteTheme } from '../models/siteTheme';
import { UserTheme } from '../models/userTheme';

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'newPassword',
  database: 'reactive-battle',

  dialect: 'postgres',
  models: [Topic, Comment, SiteTheme, UserTheme],
};

export const sequelize = new Sequelize(sequelizeOptions);
