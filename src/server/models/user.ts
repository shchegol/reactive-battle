import { DataTypes } from 'sequelize';
import { Column, Table, Model } from 'sequelize-typescript';

export interface UserAttributes {
  id: number;
  name: string;
  display_name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'users',
})
export class User extends Model<UserAttributes> {
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
}
