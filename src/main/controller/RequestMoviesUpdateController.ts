import RequestMoviesUpdate from '@application/usecase/request-movies-update/RequestMoviesUpdate'
import Controller from './Controller'

export default class RequestMoviesUpdateController implements Controller<void, void> {
  public constructor (
    private readonly usecase: RequestMoviesUpdate
  ) {}

  public async perform (): Promise<void> {
    await this.usecase.execute()
  }
}
