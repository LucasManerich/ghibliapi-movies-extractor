import DomainEvent from './DomainEvent'

export default class MovieListUpdateRequestedEvent implements DomainEvent {
  public getQueueName () {
    return 'movie-list-update-requested'
  }
}
