import Movie from '@domain/entity/movie/Movie'

export default interface MovieDatasourceGateway {
  list(limit: number, offset: number): Promise<Movie[]>
}
