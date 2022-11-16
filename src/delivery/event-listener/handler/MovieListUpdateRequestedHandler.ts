import MovieListUpdateRequestedEvent from '@domain/event/MovieListUpdateRequestedEvent'
import ImportMoviesFactory from '@main/factory/usecase/ImportMoviesFactory'
import EventHandler from './EventHandler'

export default class MovieListUpdateRequestedHandler implements EventHandler {
  public getEvent () {
    return new MovieListUpdateRequestedEvent()
  }

  public async processMessage () {
    const usecase = ImportMoviesFactory.make()
    await usecase.execute()
  }
}
