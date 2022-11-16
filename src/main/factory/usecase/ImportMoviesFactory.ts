import PrismaDeleteAllMoviesRepositoryFactory from '../repository/PrismaDeleteAllMoviesRepositoryFactory'
import PrismaCreateMovieRepositoryFactory from '../repository/PrismaCreateMovieRepositoryFactory'
import ImportMoviesImpl from '@application/usecase/import-movies/ImportMoviesImpl'
import GhibliGatewayFactory from '../gateway/GhibliGatewayFactory'

export default class ImportMoviesFactory {
  public static make () {
    const createMovieRepository = PrismaCreateMovieRepositoryFactory.make()
    const deleteAllMoviesRepository = PrismaDeleteAllMoviesRepositoryFactory.make()
    const movieDatasourceGateway = GhibliGatewayFactory.make()
    return new ImportMoviesImpl(deleteAllMoviesRepository, createMovieRepository, movieDatasourceGateway)
  }
}
