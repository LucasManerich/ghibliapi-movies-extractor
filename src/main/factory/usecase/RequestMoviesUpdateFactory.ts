import RequestMoviesUpdateImpl from '@application/usecase/request-movies-update/RequestMoviesUpdateImpl'
import QueueSingleton from '@infrastructure/queue/QueueSingleton'

export default class RequestMoviesUpdateFactory {
  public static make () {
    const queueAdapter = QueueSingleton.getInstance().getQueueAdapter()
    return new RequestMoviesUpdateImpl(queueAdapter)
  }
}
