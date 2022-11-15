import Controller from "./Controller";

export default class ImportMoviesController implements Controller<void, void> {
  perform(input: void): Promise<void> {
    throw new Error("Method not implemented.");
  }
}