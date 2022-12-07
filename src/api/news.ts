import Axios, { HttpResponse } from './axios'

export class NewsService {
  static baseUrl = '/news'

  /**
   * @description get pair list
   * @return {HttpResponse} result
   */
  static categoryList(): Promise<HttpResponse<any>> {
    return Axios({
      method: 'get',
      url: `${this.baseUrl}`,
    })
  }
}
