import PrismaListMovieRepositoryFactory from "../repository/PrismaListMovieRepositoryFactory"
import ListMovieController from "@main/controller/ListMovieController"

export default class ListMovieControllerFactory {
  public static make() {
    const listMovieRepository = PrismaListMovieRepositoryFactory.make()
    return new ListMovieController(listMovieRepository)
  }
}