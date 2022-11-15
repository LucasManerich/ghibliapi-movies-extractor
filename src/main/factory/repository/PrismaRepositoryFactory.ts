import PrismaAdapter from "@infrastructure/adapter/prisma/PrismaAdapter";
import DatabaseSingleton from "@infrastructure/database/DatabaseSingleton";

export default abstract class PrismaRepositoryFactory {
  protected static getAdapter() {
    const databaseAdapter = DatabaseSingleton.getInstance().getDatabaseAdapter()
    if (!(databaseAdapter instanceof PrismaAdapter)) throw new Error('PrismaRepositoryFactory: database adapter is not a instance of prisma')
    return databaseAdapter
  }

  protected static getPrismaClient() {
    return this.getAdapter().getPrismaClient()
  }
}