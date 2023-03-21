import {
    Table, Column, Model, PrimaryKey, DataType,
  } from 'sequelize-typescript';
  @Table({
    tableName: 'shop-MTA',
    paranoid: true,
  })
  export default class Shop extends Model {
    @PrimaryKey
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
    id!: string;
    @Column({
      type: DataType.STRING,
    })
    title!: string;
  }