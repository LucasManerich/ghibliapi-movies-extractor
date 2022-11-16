import MovieDatasourceGateway from '@application/gateway/movie-datasource/MovieDatasourceGateway'
import DeleteAllMoviesRepository from '@domain/repository/DeleteAllMoviesRepository'
import CreateMovieRepository from '@domain/repository/CreateMovieRepository'
import ImportMovies from './ImportMovies'

export default class ImportMoviesImpl implements ImportMovies {
  private readonly MOVIE_GATEWAY_LIMIT = 200
  private readonly MOVIE_GATEWAY_OFFSET = 0

  public constructor (
    private readonly deleteAllMoviesRepository: DeleteAllMoviesRepository,
    private readonly createMovieRepository: CreateMovieRepository,
    private readonly movieDatasourceGateway: MovieDatasourceGateway
  ) { }

  public async execute (): Promise<void> {
    const movieGatewayOutput = await this.movieDatasourceGateway.list(this.MOVIE_GATEWAY_LIMIT, this.MOVIE_GATEWAY_OFFSET)
    await this.deleteAllMoviesRepository.deleteAll()
    for (const movie of movieGatewayOutput) {
      await this.createMovieRepository.create(movie)
    }
  }
}
