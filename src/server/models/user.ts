/* eslint-disable import/no-cycle */

import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, HasMany,
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

  @Column({
    type: DataTypes.STRING(128),
    allowNull: false,
  })
  login: string;

  @Column({
    type: DataTypes.STRING(128),
    allowNull: false,
  })
  email: string;

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

  @Column({
    type: DataTypes.STRING(128),
    allowNull: true,
  })
  display_name: string;

  @HasMany(() => Comment)
  comments: Comment[];

  @HasMany(() => Topic)
  topics: Topic[];
}
