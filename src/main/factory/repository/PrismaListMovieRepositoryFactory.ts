import PrismaListMovieRepository from '@infrastructure/database/repository/PrismaListMovieRepository'
import PrismaRepositoryFactory from './PrismaRepositoryFactory'

export default class PrismaListMovieRepositoryFactory extends PrismaRepositoryFactory {
  public static make () {
    return new PrismaListMovieRepository(this.getPrismaClient())
  }
}
