import DatabaseAdapter from "@domain/adapter/DatabaseAdapter"

export default class DatabaseSingleton {
  // eslint-disable-next-line no-use-before-define
  private static instance: DatabaseSingleton

  private databaseAdapter?: DatabaseAdapter

  public async setDatabaseAdapter(databaseAdapter: DatabaseAdapter) {
    this.databaseAdapter = databaseAdapter
  }

  public getDatabaseAdapter() {
    if (!this.databaseAdapter) {
      throw new Error('DatabaseSingleton: database adapter not initialized')
    }
    return this.databaseAdapter
  }

  public static getInstance(): DatabaseSingleton {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton()
    }
    return DatabaseSingleton.instance
  }
}
