import MovieDatasourceGateway from '@application/gateway/movie-datasource/MovieDatasourceGateway'
import GhibliListAllFilms from './endpoints/list-all-films/GhibliListAllFilms'
import QueryStringAppendAdapter from '@domain/adapter/QueryStringAppendAdapter'
import HttpRequestAdapter from '@domain/adapter/HttpRequestAdapter'

export default class GhibliGateway implements MovieDatasourceGateway {
  public constructor(
    private readonly httpRequestAdapter: HttpRequestAdapter,
    private readonly queryStringAppendAdapter: QueryStringAppendAdapter
  ) { }

  public async list(limit: number, offset: number) {
    const endpointExecutor = new GhibliListAllFilms(this.httpRequestAdapter, this.queryStringAppendAdapter)
    return await endpointExecutor.perform({ limit, offset })
  }
}
