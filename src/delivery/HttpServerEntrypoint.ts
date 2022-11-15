import Bootstrap from './Bootstrap'
import ExpressServerBuilder from './http-server/express/ExpressServerBuilder'

const startHttpServer = () => {
  const server = new ExpressServerBuilder()
    .setUpCors()
    .setUpContentType()
    .setUpLogger()
    .setUpSecurity()
    .setUpRoutes()
    .build()
  server.start()
}

(async () => {
  const bootstrap = new Bootstrap()
  await bootstrap.startup()
  startHttpServer()
})()
