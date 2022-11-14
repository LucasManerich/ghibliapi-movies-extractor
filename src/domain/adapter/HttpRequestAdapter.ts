export default interface HttpRequestAdapter {
  callGet<Response>(url: string): Promise<Response>
  callPost<Request, Response>(url: string, request: Request): Promise<Response>
  callPut<Request, Response>(url: string, request: Request): Promise<Response>
  callDelete<Response>(url: string): Promise<Response>
}
