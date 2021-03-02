import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Topic } from '@server/models/topic';
import { Comment } from '@server/models/comment';
import { SiteTheme } from '@server/models/siteTheme';
import { UserTheme } from '@server/models/userTheme';

const sequelizeOptions: SequelizeOptions = {
  host: '0.0.0.0',
  port: 5432,
  username: 'postgres',
  password: 'newPassword',
  database: 'reactive-battle',

  dialect: 'postgres',
  models: [Topic, Comment, SiteTheme, UserTheme],
};

export const sequelize = new Sequelize(sequelizeOptions);
