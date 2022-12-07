import { AppCategoryType, AppType } from 'components/Apps/types'
import Axios, { HttpResponse } from './axios'

// bridge-list

export class DappService {
  static baseUrl = '/dapp'

  /**
   * @description get pair list
   * @return {HttpResponse} result
   */
  static categoryList(): Promise<HttpResponse<{ list: AppCategoryType[] }>> {
    return Axios({
      method: 'get',
      url: `${this.baseUrl}/category?page=1&page_size=100`,
    })
  }

  static dappList(
    page: number,
    pageSize: number,
    category?: string
  ): Promise<HttpResponse<{ list: AppType[]; total_count: number }>> {
    let url = `${this.baseUrl}?page=${page}&page_size=${pageSize}`
    if (category) {
      url = url + `&category=${category}`
    }
    return Axios({
      method: 'get',
      url: url,
    })
  }
}
