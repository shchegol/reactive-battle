/* eslint-disable import/no-cycle */

import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, HasMany,
} from 'sequelize-typescript';
import { Topic } from './topic';
import { Comment } from './comment';

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'users',
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
    type: DataTypes.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => Topic)
  topics: Topic[];

  @HasMany(() => Comment)
  comments: Comment[];
}
