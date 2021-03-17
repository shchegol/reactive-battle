import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, Index,
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'site_themes',
  modelName: 'SiteTheme',
})
export class SiteTheme extends Model<SiteTheme> {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Index
  @Column({
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  })
  theme: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  description: string;
}
