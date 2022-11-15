export default interface DatabaseAdapter {
  connect(): Promise<void>
  disconnect(): Promise<void>
}
