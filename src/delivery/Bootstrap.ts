import './Paths'
import '@infrastructure/config/Env'
import PrismaAdapterFactory from '@main/factory/adapter/PrismaAdapterFactory'
import RabbitAdapterFactory from '@main/factory/adapter/RabbitAdapterFactory'
import DatabaseSingleton from '@infrastructure/database/DatabaseSingleton'
import QueueSingleton from '@infrastructure/queue/QueueSingleton'
import EventListener from './event-listener/EventListener'

export default class Bootstrap {
  public async startup () {
    await this.connectDatabase()
    await this.connectEventBroker()
  }

  private async connectDatabase () {
    const prismaAdapter = PrismaAdapterFactory.make()
    await prismaAdapter.connect()
    DatabaseSingleton.getInstance().setDatabaseAdapter(prismaAdapter)
  }

  private async connectEventBroker () {
    const rabbitAdapter = RabbitAdapterFactory.make()
    await rabbitAdapter.connect()
    QueueSingleton.getInstance().setQueueAdapter(rabbitAdapter)
    const listener = new EventListener(rabbitAdapter)
    await listener.start()
  }
}
