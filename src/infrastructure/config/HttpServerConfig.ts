export default class HttpServerConfig {
  public static getPort () {
    const port = process.env.SERVER_PORT
    if (!port) throw new Error('$SERVER_PORT not defined')
    return Number(port)
  }
}
