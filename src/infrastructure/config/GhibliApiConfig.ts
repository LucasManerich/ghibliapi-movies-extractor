export default class GhibliApiConfig {
  public static getUrl () {
    const url = process.env.GHIBLI_API_URL
    if (!url) throw new Error('$GHIBLI_API_URL not defined')
    return url
  }
}
