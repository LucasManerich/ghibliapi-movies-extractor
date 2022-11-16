export default class RabbitConfig {
  public static getHost () {
    const host = process.env.RABBIT_HOST
    if (!host) throw new Error('$RABBIT_HOST not defined')
    return host
  }

  public static getPort () {
    const port = process.env.RABBIT_PORT
    if (!port) throw new Error('$RABBIT_PORT not defined')
    return Number(port)
  }

  public static getUser () {
    const user = process.env.RABBIT_USER
    if (!user) throw new Error('$RABBIT_USER not defined')
    return user
  }

  public static getPassword () {
    const passwd = process.env.RABBIT_PASSWORD
    if (!passwd) throw new Error('$RABBIT_PASSWORD not defined')
    return passwd
  }

  public static getPrefix () {
    return process.env.RABBIT_QUEUE_PREFIX
  }
}
