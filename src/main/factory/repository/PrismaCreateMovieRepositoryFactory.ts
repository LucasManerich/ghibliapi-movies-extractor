import PrismaCreateMovieRepository from '@infrastructure/database/repository/PrismaCreateMovieRepository'
import PrismaRepositoryFactory from './PrismaRepositoryFactory'

export default class PrismaCreateMovieRepositoryFactory extends PrismaRepositoryFactory {
  public static make () {
    return new PrismaCreateMovieRepository(this.getPrismaClient())
  }
}
