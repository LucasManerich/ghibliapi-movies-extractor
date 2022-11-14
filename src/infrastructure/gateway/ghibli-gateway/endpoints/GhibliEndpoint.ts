export default interface GhibliEndpoint<Params, Output> {
  perform(input: Params): Promise<Output>
}
