export const development = {
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: `shop-MTA`,
  host: process.env.HOST,
  port: +process.env.PORT,
  dialect: 'postgres',
  pool: {
    max: 15,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    statement_timeout: 1000 * 60 * 10,
    idle_in_transaction_session_timeout: 1000 * 60 * 10,
  },
};
export const test = {
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: `shop-MTA`,
  host: process.env.HOST,
  port:  +process.env.PORT,
  dialect: 'postgres',
  pool: {
    max: 15,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    statement_timeout: 1000 * 60 * 10,
    idle_in_transaction_session_timeout: 1000 * 60 * 10,
  },
};
export const production = {
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: `shop-MTA`,
  host: process.env.HOST,
  port: +process.env.PORT,
  dialect: 'postgres',
  pool: {
    max: 15,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    statement_timeout: 1000 * 60 * 10,
    idle_in_transaction_session_timeout: 1000 * 60 * 10,
  },
};