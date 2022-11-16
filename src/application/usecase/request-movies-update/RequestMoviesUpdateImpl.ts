import QueueAdapter from '@domain/adapter/QueueAdapter'
import MovieListUpdateRequestedEvent from '@domain/event/MovieListUpdateRequestedEvent'
import RequestMoviesUpdate from './RequestMoviesUpdate'

export default class RequestMoviesUpdateImpl implements RequestMoviesUpdate {
  public constructor (
    private readonly queueAdapter: QueueAdapter
  ) {}

  public async execute () {
    const event = new MovieListUpdateRequestedEvent()
    await this.queueAdapter.publish(event.getQueueName(), {})
  }
}
