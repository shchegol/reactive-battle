/* eslint-disable import/no-cycle */

import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, ForeignKey, BelongsTo, HasMany,
} from 'sequelize-typescript';
import { User } from './user';
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
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
  })
  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Comment)
  comments: Comment[];
}
