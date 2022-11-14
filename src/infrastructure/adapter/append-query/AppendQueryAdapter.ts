import QueryStringAppendAdapter from '@domain/adapter/QueryStringAppendAdapter'
import appendQuery from 'append-query'

export default class AppendQueryAdapter implements QueryStringAppendAdapter {
  public appendQuery (baseUrl: string, params: Record<string, string>): string {
    return appendQuery(baseUrl, params)
  }
}
