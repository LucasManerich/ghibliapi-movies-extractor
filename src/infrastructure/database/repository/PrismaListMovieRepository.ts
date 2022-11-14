import ListMovieRepository, { ListMovieRepositoryParams } from '@domain/repository/ListMovieRepository'

export default class PrismaListMovieRepository implements ListMovieRepository {
  public async list (params: ListMovieRepositoryParams) {
    throw new Error('Method not implemented.')
  }
}
