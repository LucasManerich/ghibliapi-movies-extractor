import PrismaDeleteAllMoviesRepository from '@infrastructure/database/repository/PrismaDeleteAllMoviesRepository'
import PrismaRepositoryFactory from './PrismaRepositoryFactory'

export default class PrismaDeleteAllMoviesRepositoryFactory extends PrismaRepositoryFactory {
  public static make () {
    return new PrismaDeleteAllMoviesRepository(this.getPrismaClient())
  }
}
