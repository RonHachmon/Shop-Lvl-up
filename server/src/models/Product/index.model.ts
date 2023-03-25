import {
    Table, Column, Model, PrimaryKey, DataType, CreatedAt, UpdatedAt, DeletedAt,
  } from 'sequelize-typescript';


 
  @Table({
    tableName: 'Products',
    timestamps: true,
    paranoid: true,
  })
  export default class Product extends Model {
    static findById(_id: string) {
        throw new Error('Method not implemented.');
    }
    @PrimaryKey
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      allowNull: false,
      comment: "The product uniqu ID"
    })
    id: string;
    
    @Column({
      type: DataType.STRING,
      allowNull: false,
      comment: "The product name",
      validate:{
        is: ["^[a-z]+$",'i'],
        isAlpha: true, 
        isNumeric: false,
        len: [2,30]
      }
    })
    name: string;
    @Column({
      type: DataType.ENUM,
      allowNull: false,
      comment: "The product category",
      values: ['dairy', 'bakery', 'meat','snacks'],
      validate:
      {
        isIn: [['dairy', 'bakery', 'meat','snacks']],
      }
    })
    category: string;
    @Column({
      type: DataType.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "The product current price",
      validate:{ min:0,}
    })
    price: number;
    
    @Column({
      type: DataType.INTEGER.UNSIGNED,
      comment: "The product current quentity",
      validate:{ min:0,}
    })
    quantity: number;
   
    @Column({
      type: DataType.STRING,
      comment: "The product image path"
    })
    image: string;
    
    @Column({
      type: DataType.STRING,
      comment: "The product description",
      validate:{
        is: /^[a-zA-Z ]+$/,
        isNumeric: false,
        len: [2,30]
      }
    })
    description: string;
    @CreatedAt
    creationDate: Date;
    @UpdatedAt
    updatedOn: Date;
    @DeletedAt
    deletionDate: Date;

    
  }