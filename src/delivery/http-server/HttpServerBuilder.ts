export default interface HttpServerBuilder {
  setUpCors(): HttpServerBuilder
  setUpSecurity(): HttpServerBuilder
  setUpLogger(): HttpServerBuilder
  setUpRoutes(): HttpServerBuilder
  setUpContentType(): HttpServerBuilder
}