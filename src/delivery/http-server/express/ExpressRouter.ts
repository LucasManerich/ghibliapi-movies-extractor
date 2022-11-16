import RequestMoviesUpdateControllerFactory from '@main/factory/controller/RequestMoviesUpdateControllerFactory'
import ListMovieControllerFactory from '@main/factory/controller/ListMovieControllerFactory'
import { Router } from 'express'

export default class ExpressRouter {
  private router = Router()

  public constructor () {
    this.setUpListMovie()
    this.setUpRequestMoviesUpdate()
  }

  private setUpListMovie () {
    const listMovieController = ListMovieControllerFactory.make()
    this.router.get('/movies', async (request, response) => {
      // #swagger.tags = ['Movies']
      // #swagger.description = "Endpoint de listagem dos filmes"
      // #swagger.parameters['limit'] = { in: 'query', description: 'Quantidade máxima de registros', required: false, type: 'integer'}
      // #swagger.parameters['offset'] = { in: 'query', description: 'Quantidade de registros a serem desconsiderados', required: false, type: 'integer' }
      /* #swagger.responses[200] = {
          description: 'Lista de filmes',
          schema: { $ref: '#/definitions/MovieList' }
      } */
      const output = await listMovieController.perform({
        limit: request.query.limit ? Number(request.query.limit) : undefined,
        offset: request.query.offset ? Number(request.query.offset) : undefined
      })
      return response.json(output)
    })
  }

  private setUpRequestMoviesUpdate () {
    const requestMoviesUpdateController = RequestMoviesUpdateControllerFactory.make()
    this.router.post('/movies/request-update', async (_, response) => {
      // #swagger.tags = ['Movies']
      // #swagger.description = "Endpoint para solicitação de atualização da base de dados"
      /* #swagger.responses[200] = {
          description: 'Mensagem de sucesso',
          schema: { msg: 'Movies update added to queue.' }
      } */
      await requestMoviesUpdateController.perform()
      return response.json({ msg: 'Movies update added to queue.' })
    })
  }

  public getExpressRouter () {
    return this.router
  }
}
