import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import { SiteTheme } from '@server/models/siteTheme';
import { User } from '@server/models/user';

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user_themes',
  modelName: 'UserTheme',
})
export class UserTheme extends Model<UserTheme> {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => SiteTheme)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'theme_id',
  })
  themeId: number;

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
