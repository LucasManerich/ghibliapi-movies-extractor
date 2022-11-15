import ListMovieControllerFactory from "@main/factory/controller/ListMovieControllerFactory"
import { Router } from "express"

export default class ExpressRouter {
  private router = Router()

  public constructor() {
    this.setUpListMovie()
  }

  private setUpListMovie() {
    const listMovieController = ListMovieControllerFactory.make()
    this.router.get('/movies', (request, response) => {
      const { limit, offset } = request.body
      const output = listMovieController.perform({ limit, offset })
      return response.json(output)
    })
  }

  public getExpressRouter() {
    return this.router
  }
}