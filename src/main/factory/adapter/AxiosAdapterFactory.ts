import AxiosAdapter from "@infrastructure/adapter/axios/AxiosAdapter"

export default class AxiosAdapterFactory {
  public static make() {
    return new AxiosAdapter()
  }
}