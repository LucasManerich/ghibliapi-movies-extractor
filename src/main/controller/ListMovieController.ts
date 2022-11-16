import ListMovieRepository from '@domain/repository/ListMovieRepository'
import Controller from './Controller'

type ListMovieInput = {
  limit?: number
  offset?: number
}

type ListMovieOutput = {
  id: string
  name: string
  original_name: string
  score: number
  release_year: number,
  description?: string,
}[]

export default class ListMovieController implements Controller<ListMovieInput, ListMovieOutput> {
  public constructor (
    private readonly listMovieRepository: ListMovieRepository
  ) {}

  public async perform (input: ListMovieInput): Promise<ListMovieOutput> {
    const movies = await this.listMovieRepository.list({ limit: input.limit, offset: input.offset })
    return movies.map(movie => ({
      id: movie.getId(),
      name: movie.getName(),
      original_name: movie.getOriginalName(),
      score: movie.getScore(),
      release_year: movie.getReleaseYear(),
      description: movie.getDescription()
    }))
  }
}
