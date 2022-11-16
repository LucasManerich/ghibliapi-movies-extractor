import DatabaseAdapter from '@domain/adapter/DatabaseAdapter'
import { PrismaClient } from '@prisma/client'

export default class PrismaAdapter implements DatabaseAdapter {
  private prisma = new PrismaClient()

  public async connect () {
    await this.prisma.$connect()
    console.log('PrismaAdapter: database connected')
  }

  public async disconnect () {
    await this.prisma.$disconnect()
    console.log('PrismaAdapter: database disconnected')
  }

  public getPrismaClient () {
    return this.prisma
  }
}
