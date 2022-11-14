import QueryStringAppendAdapter from '@domain/adapter/QueryStringAppendAdapter'
import GhibliListAllFilmsOutputDto from './GhibliListAllFilmsOutputDto'
import GhibliApiConfig from '@infrastructure/config/GhibliApiConfig'
import HttpRequestAdapter from '@domain/adapter/HttpRequestAdapter'
import MovieBuider from '@domain/entity/movie/MovieBuilder'
import Movie from '@domain/entity/movie/Movie'
import GhibliEndpoint from '../GhibliEndpoint'

type GhibliListAllFilmsInput = {
  limit: number
  offset: number
}

export default class GhibliListAllFilms implements GhibliEndpoint<GhibliListAllFilmsInput, Movie[]> {
  private readonly ENDPOINT = 'films'

  public constructor (
    private readonly httpRequestAdapter: HttpRequestAdapter,
    private readonly queryStringAppendAdapter: QueryStringAppendAdapter
  ) {}

  public async perform (input: GhibliListAllFilmsInput) {
    const url = this.getRequestUrl(input.limit, input.offset)
    const output = await this.httpRequestAdapter.callGet<GhibliListAllFilmsOutputDto[]>(url)
    return this.buildMovieListOutput(output)
  }

  private buildMovieListOutput (output: GhibliListAllFilmsOutputDto[]) {
    return output.map(movieOutput => {
      return new MovieBuider()
        .setId(movieOutput.id)
        .setName(movieOutput.title)
        .setOriginalName(movieOutput.original_title)
        .setDescription(movieOutput.description)
        .setScore(Number(movieOutput.rt_score))
        .setReleaseDate(this.createReleaseDate(movieOutput.release_date))
        .build()
    })
  }

  private createReleaseDate (releaseYear: string) {
    // como a API devolve apenas o ano de lançamento do filme, vamos ciar um objeto Date usando o dia primeiro de janeiro
    const dateString = `1-1-${releaseYear}`
    return new Date(dateString)
  }

  private getRequestUrl (limit: number, offset: number) {
    const baseUrl = GhibliApiConfig.getUrl()
    const url = `${baseUrl}/${this.ENDPOINT}`
    const queryStringParams = {
      limit: `${limit}`,
      offset: `${offset}`
    }
    return this.queryStringAppendAdapter.appendQuery(url, queryStringParams)
  }
}
