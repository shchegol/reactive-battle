/* eslint-disable import/no-cycle */

import bcrypt from 'bcrypt';
import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, HasMany, BeforeCreate, Length, IsEmail, IsUrl,
} from 'sequelize-typescript';
import { Comment } from '@server/models/comment';
import { Topic } from './topic';

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'users',
  modelName: 'User',
})

export class User extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Length({ min: 3, max: 15 })
  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  login: string;

  @IsEmail
  @Column({
    type: DataTypes.STRING(128),
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataTypes.STRING(128),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataTypes.STRING(128),
    allowNull: true,
  })
  first_name: string;

  @Column({
    type: DataTypes.STRING(128),
    allowNull: true,
  })
  second_name: string;

  @IsUrl
  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  avatar: string;

  @HasMany(() => Comment)
  comments: Comment[];

  @HasMany(() => Topic)
  topics: Topic[];

  @BeforeCreate
  static addSalt(user: User) {
    const salt = bcrypt.genSaltSync();
    // eslint-disable-next-line no-param-reassign
    user.password = bcrypt.hashSync(user.password, salt);
  }

  isValidPassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }

  static isSavePassword(password: unknown) {
    return typeof password === 'string' && password.length > 3;
  }
}
