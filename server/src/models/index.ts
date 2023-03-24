import { Sequelize } from "sequelize-typescript";
export { default as Product } from './Product/index.model';
import { production } from "../config";
import {add_hard_coded_products} from '../repositories/task/data';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const modelMatch = (filename: string, member: string) =>
  filename.substring(0, filename.indexOf('/index.model')).toLowerCase() === member.toLowerCase();
// eslint-disable-next-line import/no-mutable-exports
const sequelize = new Sequelize(production.database, production.username, production.password, {
  ...production,
  dialect: 'postgres',
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.sync().catch(err => console.log(err+'Error connecting'));   
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
sequelize.addModels([`${__dirname}/*/*.model.*`], modelMatch);

//cannot run below code while sequelize.sync is running
//add_hard_coded_products()

// eslint-disable-next-line object-shorthand
export default sequelize;
