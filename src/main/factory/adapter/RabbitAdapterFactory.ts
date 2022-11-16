import RabbitAdapter from '@infrastructure/adapter/rabbit-mq/RabbitAdapter'
import RabbitConfig from '@infrastructure/config/RabbitConfig'

export default class RabbitAdapterFactory {
  public static make () {
    return new RabbitAdapter(
      RabbitConfig.getHost(),
      RabbitConfig.getPort(),
      RabbitConfig.getUser(),
      RabbitConfig.getPassword()
    )
  }
}
