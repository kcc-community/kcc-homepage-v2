import { createReducer } from '@reduxjs/toolkit'
import { AppCategoryType } from '../../components/Apps/types'
import { updateAppCategoryList } from './actions'

export interface AppsState {
  appCategoryList: AppCategoryType[]
}

const initialState: AppsState = {
  appCategoryList: [],
}

export default createReducer(initialState, (builder) =>
  builder.addCase(updateAppCategoryList, (state, action) => {
    const { list } = action.payload
    state.appCategoryList = list
  })
)
