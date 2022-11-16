import RequestMoviesUpdateController from '@main/controller/RequestMoviesUpdateController'
import RequestMoviesUpdateFactory from '../usecase/RequestMoviesUpdateFactory'

export default class RequestMoviesUpdateControllerFactory {
  public static make () {
    const requestMoviesUpdate = RequestMoviesUpdateFactory.make()
    return new RequestMoviesUpdateController(requestMoviesUpdate)
  }
}
