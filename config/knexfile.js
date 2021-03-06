'use strict'

const migrationsDirectory = '../migrations'
const seedsDirectory = '../seeds'

const Config = require('../src/lib/config')

module.exports = {
  client: 'mysql',
  version: '5.5',
  connection: Config.DATABASE_URI,
  min: Config.DB_CONNECTION_POOL_MIN,
  max: Config.DB_CONNECTION_POOL_MAX,
  migrations: {
    directory: migrationsDirectory,
    tableName: 'migration',
    stub: `${migrationsDirectory}/migration.template`
  },
  seeds: {
    directory: seedsDirectory,
    loadExtensions: ['.js']
  }
}
