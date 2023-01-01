import Axios, { HttpResponse } from './axios'

export interface NewListItemType {
  id: number
  title: string
  content_link: string
  banner_url: string
  post_date: string
  status: number
}

export class NewsService {
  static baseUrl = '/news'

  /**
   * @description get pair list
   * @return {HttpResponse} result
   */
  static list(): Promise<HttpResponse<{ list: NewListItemType[] }>> {
    return Axios({
      method: 'get',
      url: `${this.baseUrl}?page=1&page_size=3`,
    })
  }
}
