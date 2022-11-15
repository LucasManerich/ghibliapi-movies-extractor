import ListMovieControllerFactory from "@main/factory/controller/ListMovieControllerFactory"
import { Router } from "express"

export default class ExpressRouter {
  private router = Router()

  public constructor() {
    this.setUpListMovie()
  }


  private setUpListMovie() {
    const listMovieController = ListMovieControllerFactory.make()
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to get a specific user.' 
    this.router.get('/movies', (request, response) => {
      // #swagger.description = "Description here..."
      const { limit, offset } = request.body
      const output = listMovieController.perform({ limit, offset })
      return response.json(output)
    })
  }

  public getExpressRouter() {
    return this.router
  }
}