export default interface Controller<Input, Output> {
  perform(input : Input): Promise<Output>
}
