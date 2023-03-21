import { Sequelize } from "sequelize-typescript";
import Config from "../config/config";

const config = Config.production;


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const modelMatch = (filename: string, member: string) =>
  filename.substring(0, filename.indexOf('/index.model')).toLowerCase() === member.toLowerCase();
// eslint-disable-next-line import/no-mutable-exports
const sequelize = new Sequelize(config.database, config.username, config.password, {
  ...config,
  dialect: 'postgres',
});
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: true }); 
    console.log("The table for the User model was just (re)created!");
   
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
sequelize.addModels([`${__dirname}/*/*.model.*`], modelMatch);

// eslint-disable-next-line object-shorthand
export default sequelize;