/* eslint-disable import/no-cycle */

import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, HasMany,
} from 'sequelize-typescript';
import { Comment } from './comment';

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'topics',
})
export class Topic extends Model {
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

  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    field: 'login',
  })
  login: string;

  @HasMany(() => Comment)
  comments: Comment[];
}
