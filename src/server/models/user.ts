/* eslint-disable import/no-cycle */

import bcrypt from 'bcrypt';
import { DataTypes } from 'sequelize';
import {
  Column, Table, Model, BeforeCreate, Length, IsEmail, IsUrl,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  modelName: 'User',
})

export class User extends Model {
  @Length({ min: 3, max: 15 })
  @Column({
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  })
  login: string;

  @IsEmail
  @Column({
    type: DataTypes.STRING(128),
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataTypes.STRING(128),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataTypes.STRING(128),
    allowNull: true,
  })
  first_name: string;

  @Column({
    type: DataTypes.STRING(128),
    allowNull: true,
  })
  second_name: string;

  @IsUrl
  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  avatar: string;

  @BeforeCreate
  static addSalt(user: User) {
    const salt = bcrypt.genSaltSync();
    // eslint-disable-next-line no-param-reassign
    user.password = bcrypt.hashSync(user.password, salt);
  }

  isValidPassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }

  static isSavePassword(password: unknown) {
    return typeof password === 'string' && password.length > 3;
  }
}
