import { createAction } from '@reduxjs/toolkit'
import { AppCategoryType } from '../../components/Apps/types'

export const updateAppCategoryList = createAction<{
  list: AppCategoryType[]
}>('apps/updateAppCategoryList')
