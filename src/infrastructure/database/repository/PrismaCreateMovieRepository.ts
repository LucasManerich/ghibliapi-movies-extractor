import CreateMovieRepository from '@domain/repository/CreateMovieRepository'
import Movie from '@domain/entity/movie/Movie'
import { PrismaClient } from '@prisma/client'

export default class PrismaCreateMovieRepository implements CreateMovieRepository {
  public constructor (
    private readonly prisma: PrismaClient
  ) { }

  public async create (movie: Movie): Promise<void> {
    await this.prisma.movie.create({
      data: {
        id: movie.getId(),
        name: movie.getName(),
        originalName: movie.getOriginalName(),
        releaseDate: movie.getReleaseDate(),
        description: movie.getDescription(),
        score: movie.getScore()
      }
    })
  }
}
