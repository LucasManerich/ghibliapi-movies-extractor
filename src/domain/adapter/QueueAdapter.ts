export default interface QueueAdapter {
  connect(): Promise<void>
  disconnect(): Promise<void>
  publish (queue: string, data: object|null): Promise<void>;
  consume (queue: string, onMessage: (value: unknown) => Promise<void>): Promise<void>;
}
