/* eslint-disable import/no-cycle */

import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import { User } from '@server/models/user';
import { Topic } from './topic';

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'comments',
  modelName: 'Comment',
})
export class Comment extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  body: string;

  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Topic)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'topic_id',
  })
  topicId: number;

  @BelongsTo(() => Topic)
  topic: Topic;

  @ForeignKey(() => Comment)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'comment_id',
  })
  commentId: number | null;
}
