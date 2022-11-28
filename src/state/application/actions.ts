import { createAction } from '@reduxjs/toolkit'

export const updateBlockNumber = createAction<{
  chainId: number
  blockNumber: number
}>('app/updateBlockNumber')

export const changeLanguage = createAction<{
  lng: string
}>('app/changeLanguage')

export const changeTheme = createAction<{
  isDark: boolean
}>('app/changeTheme')

export const changeMobileMenuShow = createAction<{
  show: boolean
}>('app/changeMobileMenuShow')

export const updateBridgeLoading = createAction<{
  visible: boolean
  status: number
}>('app/updateBridgeLoading')
