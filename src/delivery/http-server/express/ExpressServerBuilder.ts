import DeployEnvironmentConfig from '@infrastructure/config/DeployEnvironmentConfig'
import SwaggerOutputFile from '../../swagger-output.json'
import HttpServerBuilder from '../HttpServerBuilder'
import ExpressServer from './ExpressServer'
import ExpressRouter from './ExpressRouter'
import SwaggerUI from 'swagger-ui-express'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

export default class ExpressServerBuilder implements HttpServerBuilder {
  private readonly CORS_ALLOW_ORGIN = '*'
  private readonly URL_PREFIX = '/api/v1'
  private readonly app = express()

  public setUpCors () {
    this.app.use(cors({ origin: this.CORS_ALLOW_ORGIN }))
    return this
  }

  public setUpSecurity () {
    this.app.use(helmet())
    return this
  }

  public setUpLogger () {
    if (DeployEnvironmentConfig.isDev()) this.app.use(morgan('dev'))
    if (DeployEnvironmentConfig.isStaging()) this.app.use(morgan('common'))
    if (DeployEnvironmentConfig.isProduction()) this.app.use(morgan('short'))
    return this
  }

  public setUpApiDocs () {
    this.app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(SwaggerOutputFile))
    return this
  }

  public setUpRoutes () {
    const router = new ExpressRouter()
    this.app.use(this.URL_PREFIX, router.getExpressRouter())
    return this
  }

  public setUpContentType () {
    this.app.use(express.json())
    return this
  }

  public build () {
    return new ExpressServer(this.app)
  }
}
