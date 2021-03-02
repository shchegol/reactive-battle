import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, ForeignKey,
} from 'sequelize-typescript';
import { SiteTheme } from '@server/models/siteTheme';

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user_themes',
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
  })
  themeId: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
  ownerLogin: string;
}
