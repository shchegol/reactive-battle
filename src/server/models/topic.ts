/* eslint-disable import/no-cycle */

import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, HasMany, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import { Comment } from './comment';
import { User } from './user';

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'topics',
  modelName: 'Topic',
})
export class Topic extends Model {
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

  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Comment)
  comments: Comment[];
}
