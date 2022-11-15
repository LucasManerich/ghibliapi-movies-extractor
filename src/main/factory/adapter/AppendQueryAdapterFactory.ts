import AppendQueryAdapter from "@infrastructure/adapter/append-query/AppendQueryAdapter"

export default class AppendQueryAdapterFactory {
  public static make() {
    return new AppendQueryAdapter()
  }
}