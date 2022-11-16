export default class DeployEnvironmentConfig {
  private static readonly DEV_ENV = 'dev'
  private static readonly STAGING_ENV = 'staging'
  private static readonly PRODUCTION_END = 'production'

  public static getEnv () {
    const validEnvs = [this.DEV_ENV, this.STAGING_ENV, this.PRODUCTION_END]
    const envName = process.env.NODE_ENV
    if (!envName) throw new Error('$NODE_ENV not defined')
    if (!validEnvs.includes(envName)) throw new Error(`${envName} is not a valid.`)
    return envName
  }

  public static isProduction () {
    return this.getEnv() === this.PRODUCTION_END
  }

  public static isStaging () {
    return this.getEnv() === this.STAGING_ENV
  }

  public static isDev () {
    return this.getEnv() === this.DEV_ENV
  }
}
