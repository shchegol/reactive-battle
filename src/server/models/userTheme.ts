import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, ForeignKey,
} from 'sequelize-typescript';
import { SiteTheme } from '@server/models/siteTheme';
import { User } from '@server/models/user';

@Table({
  timestamps: false,
  tableName: 'user_themes',
  modelName: 'UserTheme',
})
export class UserTheme extends Model<UserTheme> {
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
}
