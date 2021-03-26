import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Topic } from '@server/models/topic';
import { Comment } from '@server/models/comment';
import { SiteTheme } from '@server/models/siteTheme';
import { UserTheme } from '@server/models/userTheme';
import { User } from '@server/models/user';
import { Leaderboard } from '@server/models/leaderboard';

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
  models: [
    User,
    Topic,
    Comment,
    SiteTheme,
    UserTheme,
    Leaderboard,
  ],
};

export const sequelize = new Sequelize(sequelizeOptions);
