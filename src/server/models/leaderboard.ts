import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import { User } from '@server/models/user';

@Table({
  tableName: 'leaderboard',
  modelName: 'Leaderboard',
})
export class Leaderboard extends Model<Leaderboard> {
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  score: number;

  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
