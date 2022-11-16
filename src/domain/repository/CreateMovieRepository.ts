import Movie from '@domain/entity/movie/Movie'

export default interface CreateMovieRepository {
  create(movie: Movie): Promise<void>
}
