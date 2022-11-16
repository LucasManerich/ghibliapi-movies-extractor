import QueueAdapter from '@domain/adapter/QueueAdapter'

export default class QueueSingleton {
  // eslint-disable-next-line no-use-before-define
  private static instance: QueueSingleton

  private queueAdapter?: QueueAdapter

  public async setQueueAdapter (QueueAdapter: QueueAdapter) {
    this.queueAdapter = QueueAdapter
  }

  public getQueueAdapter () {
    if (!this.queueAdapter) {
      throw new Error('queue adapter not set')
    }
    return this.queueAdapter
  }

  public static getInstance (): QueueSingleton {
    if (!QueueSingleton.instance) {
      QueueSingleton.instance = new QueueSingleton()
    }
    return QueueSingleton.instance
  }
}
