import DomainEvent from '@domain/event/DomainEvent'

export default interface EventHandler {
  getEvent(): DomainEvent
  processMessage(message: unknown): Promise<void>
}
