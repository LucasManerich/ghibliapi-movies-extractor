import QueueAdapter from '@domain/adapter/QueueAdapter'
import amqp, { Connection, ConsumeMessage } from 'amqplib'

export default class RabbitAdapter implements QueueAdapter {
  private connection?: Connection

  public constructor (
    private readonly host: string,
    private readonly port: number,
    private readonly user: string,
    private readonly password: string
  ) {}

  public async connect (): Promise<void> {
    this.connection = await amqp.connect(`amqp://${this.user}:${this.password}@${this.host}:${this.port}`)
    console.log('RabbitMQ: Broker connected')
  }

  public async disconnect (): Promise<void> {
    if (!this.connection) throw new Error('rabbit connection not set')
    await this.connection.close()
    console.log('RabbitMQ: Broker disconnected')
  }

  public async publish (queue: string, data: object | null): Promise<void> {
    if (!this.connection) throw new Error('rabbit connection not set')
    const channel = await this.connection.createChannel()
    await channel.assertQueue(queue, { durable: true })
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)))
    console.log(`RabbitMQ: Message published at queue: "${queue}"`)
  }

  public async consume (queue: string, onMessage: (value: unknown) => Promise<void>): Promise<void> {
    if (!this.connection) throw new Error('rabbit connection not set')
    const channel = await this.connection.createChannel()
    await channel.assertQueue(queue, { durable: true })
    await channel.consume(queue, async (msg: ConsumeMessage | null) => {
      if (msg) {
        try {
          console.log(`RabbitMQ: Message received at queue: "${queue}"`)
          const input = JSON.parse(msg.content.toString())
          await onMessage(input)
          channel.ack(msg)
        } catch (err) {
          console.error(err)
          channel.reject(msg, true)
        }
      }
    })
  }
}
