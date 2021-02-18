import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { User } from '../models/User';

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'newPassword',
  database: 'reactive-battle',

  dialect: 'postgres',
  models: [User],
};

export const sequelize = new Sequelize(sequelizeOptions);
