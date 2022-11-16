import MovieListUpdateRequestedHandler from './handler/MovieListUpdateRequestedHandler'
import QueueAdapter from '@domain/adapter/QueueAdapter'
import EventHandler from './handler/EventHandler'

export default class EventListener {
  public constructor (
    private readonly queueAdapter: QueueAdapter
  ) {}

  private get events (): EventHandler[] {
    return [
      new MovieListUpdateRequestedHandler()
    ]
  }

  public async start () {
    try {
      const queueList = this.events.map(event => event.getEvent().getQueueName())
      for (const queue of queueList) {
        await this.queueAdapter.consume(queue, async (value) => {
          await this.consumerDelegate(queue, value)
        })
      }
      if (queueList.length > 0) console.log('EventListener: listenting: ' + queueList.join(', '))
    } catch (err) {
      const message = (err instanceof Error ? err.message : err)
      console.log(`EventListener: startup failed. "${message}"`)
    }
  }

  private async consumerDelegate (queue: string, value: unknown) {
    const consumer = this.events.find(x => x.getEvent().getQueueName() === queue)
    if (!consumer) throw new Error(`EventListener: consumer not found for queue: "${queue}"`)
    await consumer.processMessage(value)
  }
}
