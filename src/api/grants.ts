import { GasRevenueFormDataType } from 'components/GasRevenue/SubmitForm'
import Axios, { HttpResponse } from './axios'

export class GrantsService {
  static baseUrl = '/grants'

  /**
   * @description get pair list
   * @return {HttpResponse} result
   */
  static submitGasRevenue(
    data: GasRevenueFormDataType
  ): Promise<HttpResponse<any>> {
    return Axios({
      method: 'post',
      url: `${this.baseUrl}/submit`,
      data,
    })
  }
}
