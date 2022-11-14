import MovieDatasource from '@application/gateway/movie-datasource/MovieDatasource'
import QueryStringAppendAdapter from '@domain/adapter/QueryStringAppendAdapter'
import HttpRequestAdapter from '@domain/adapter/HttpRequestAdapter'
import Movie from '@domain/entity/movie/Movie'
import GhibliListAllFilms from './endpoints/list-all-films/GhibliListAllFilms'

export default class GhibliGateway implements MovieDatasource {
  public constructor (
    private readonly httpRequestAdapter: HttpRequestAdapter,
    private readonly queryStringAppendAdapter: QueryStringAppendAdapter
  ) {}

  public async list (limit: number, offset: number): Promise<Movie> {
    const endpointExecutor = new GhibliListAllFilms(this.httpRequestAdapter, this.queryStringAppendAdapter)
    return await endpointExecutor.perform({ limit, offset })
  }
}
