import Movie from '@domain/entity/movie/Movie'

export type ListMovieRepositoryParams = {
  limit?: number,
  offset?: number
}

export default interface ListMovieRepository {
  list(params: ListMovieRepositoryParams): Promise<Movie[]>
}
