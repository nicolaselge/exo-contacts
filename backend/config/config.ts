export default module.exports = {
  development: {
    dialect: 'mariadb',
    database: process.env.POSTGRES_DB_NAME || 'exo-contacts',
    username: process.env.POSTGRES_DB_USERNAME || 'mariadb',
    password: process.env.POSTGRES_DB_PASSWORD || 'mariadb',
    host: process.env.POSTGRES_DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_DB_PORT || '3306')
  },
  test: {
    dialect: 'mariadb',
    database: process.env.POSTGRES_DB_NAME || 'exo-contacts',
    username: process.env.POSTGRES_DB_USERNAME || 'mariadb',
    password: process.env.POSTGRES_DB_PASSWORD || 'mariadb',
    host: process.env.POSTGRES_DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_DB_PORT || '3306')
  },
  production: {
    dialect: 'mariadb',
    database: process.env.POSTGRES_DB_NAME,
    username: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    host: process.env.POSTGRES_DB_HOST,
    port: parseInt(process.env.POSTGRES_DB_PORT!)
  }
}