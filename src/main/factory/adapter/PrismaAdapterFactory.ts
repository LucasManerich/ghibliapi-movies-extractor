import PrismaAdapter from "@infrastructure/adapter/prisma/PrismaAdapter";

export default class PrismaAdapterFactory {
  public static make() {
    return new PrismaAdapter()
  }
}