import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Topic } from '@server/models/topic';
import { Comment } from '@server/models/comment';
import { SiteTheme } from '@server/models/siteTheme';
import { UserTheme } from '@server/models/userTheme';
import { User } from '@server/models/user';
import { Leaderboard } from '@server/models/leaderboard';

const sequelizeOptions: SequelizeOptions = {
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

if (process.env.NODE_ENV === 'production') {
  sequelizeOptions.protocol = 'postgres';
  sequelizeOptions.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

export const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, sequelizeOptions);
