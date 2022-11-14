import HttpRequestAdapter from '@domain/adapter/HttpRequestAdapter'
import axios from 'axios'

export default class AxiosAdapter implements HttpRequestAdapter {
  private readonly AXIOS_RESPONSE_TYPE = 'json'

  public async callGet<Response> (url: string): Promise<Response> {
    const response = await axios.get<Response>(url, { responseType: this.AXIOS_RESPONSE_TYPE })
    return response.data
  }

  public async callPost<Request, Response> (url: string, request: Request): Promise<Response> {
    const response = await axios.post<Response>(url, request, { responseType: this.AXIOS_RESPONSE_TYPE })
    return response.data
  }

  public async callPut<Request, Response> (url: string, request: Request): Promise<Response> {
    const response = await axios.put<Response>(url, request, { responseType: this.AXIOS_RESPONSE_TYPE })
    return response.data
  }

  public async callDelete<Response> (url: string): Promise<Response> {
    const response = await axios.delete<Response>(url, { responseType: this.AXIOS_RESPONSE_TYPE })
    return response.data
  }
}
