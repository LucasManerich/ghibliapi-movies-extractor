import DeleteAllMoviesRepository from '@domain/repository/DeleteAllMoviesRepository'
import { PrismaClient } from '@prisma/client'

export default class PrismaDeleteAllMoviesRepository implements DeleteAllMoviesRepository {
  public constructor (
    private readonly prisma: PrismaClient
  ) { }

  public async deleteAll () {
    await this.prisma.movie.deleteMany()
  }
}
