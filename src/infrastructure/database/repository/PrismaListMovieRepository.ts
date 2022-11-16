import ListMovieRepository, { ListMovieRepositoryParams } from '@domain/repository/ListMovieRepository'
import MovieBuider from '@domain/entity/movie/MovieBuilder'
import { PrismaClient } from '@prisma/client'

export default class PrismaListMovieRepository implements ListMovieRepository {
  public constructor (
    private readonly prisma: PrismaClient
  ) { }

  public async list (params: ListMovieRepositoryParams) {
    const queryResult = await this.runQuery(params.limit, params.offset)
    return queryResult.map(movieQueryResult => {
      return new MovieBuider()
        .setId(movieQueryResult.id)
        .setName(movieQueryResult.name)
        .setOriginalName(movieQueryResult.originalName)
        .setReleaseDate(movieQueryResult.releaseDate)
        .setScore(movieQueryResult.score)
        .setDescription(movieQueryResult.description ?? undefined)
        .build()
    })
  }

  private async runQuery (limit?: number, offset?: number) {
    return await this.prisma.movie.findMany({
      orderBy: { releaseDate: 'desc' },
      take: limit,
      skip: offset
    })
  }
}
