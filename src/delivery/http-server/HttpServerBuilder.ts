export default interface HttpServerBuilder {
  setUpCors(): HttpServerBuilder
  setUpSecurity(): HttpServerBuilder
  setUpLogger(): HttpServerBuilder
  setUpApiDocs(): HttpServerBuilder
  setUpRoutes(): HttpServerBuilder
  setUpContentType(): HttpServerBuilder
}
