import './Paths'
import '@infrastructure/config/Env'
import DatabaseSingleton from "@infrastructure/database/DatabaseSingleton"
import PrismaAdapterFactory from "@main/factory/adapter/PrismaAdapterFactory"

export default class Bootstrap {
  public async startup() {
    await this.connectDatabase()
  }

  private async connectDatabase() {
    const prismaAdapter = PrismaAdapterFactory.make()
    await prismaAdapter.connect()
    DatabaseSingleton.getInstance().setDatabaseAdapter(prismaAdapter)
  }
}