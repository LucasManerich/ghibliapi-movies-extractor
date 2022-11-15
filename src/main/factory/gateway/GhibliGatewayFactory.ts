import GhibliGateway from "@infrastructure/gateway/ghibli-gateway/GhibliGateway"
import AppendQueryAdapterFactory from "../adapter/AppendQueryAdapterFactory"
import AxiosAdapterFactory from "../adapter/AxiosAdapterFactory"

export default class GhibliGatewayFactory {
  public static make() {
    const axiosAdapter = AxiosAdapterFactory.make()
    const appendQueryAdapter = AppendQueryAdapterFactory.make()
    return new GhibliGateway(axiosAdapter, appendQueryAdapter)
  }
}