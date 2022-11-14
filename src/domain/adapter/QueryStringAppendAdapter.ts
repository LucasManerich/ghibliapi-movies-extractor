export default interface QueryStringAppendAdapter {
  appendQuery(baseUrl: string, params: Record<string, string>): string
}
