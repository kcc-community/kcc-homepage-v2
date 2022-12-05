export interface HttpResponse<T> {
  code: number
  msg: string
  data: T
}
