import HttpServerConfig from '@infrastructure/config/HttpServerConfig'
import Server from '@delivery/Server'
import { Express } from 'express'

export default class ExpressServer implements Server {
  public constructor (
    private readonly expressApp: Express
  ) {}

  public start () {
    const serverPort = HttpServerConfig.getPort()
    this.expressApp.listen(serverPort, () => {
      console.log(`ExpressServer: http server running on port: ${serverPort}`)
    })
  }
}
