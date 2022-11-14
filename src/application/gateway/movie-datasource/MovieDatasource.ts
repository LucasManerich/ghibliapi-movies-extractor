import Movie from '@domain/entity/movie/Movie'

export default interface MovieDatasource {
  list(limit: number, offset: number): Promise<Movie>
}
