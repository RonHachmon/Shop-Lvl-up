module.exports = {
    development: {
      username: 'postgres',
      password: 'rootroot',
      database: `shop-MTA`,
      host: '127.0.0.1',
      port: 5432,
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
    },
    test: {
      username: 'postgres',
      password: 'rootroot',
      database: `shop-MTA`,
      host: '127.0.0.1',
      port: 5432,
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
    },
    production: {
      username: 'postgres',
      password: 'rootroot',
      database: `shop-MTA`,
      host: '127.0.0.1',
      port: 5432,
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
    },
  };