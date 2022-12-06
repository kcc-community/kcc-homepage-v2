import { createReducer } from '@reduxjs/toolkit'
import {
  updateBlockNumber,
  changeLanguage,
  changeTheme,
  changeMobileMenuShow,
  updateBridgeLoading,
} from './actions'

export interface ApplicationState {
  blockNumber: { [chainId: number]: number }
  darkMode: boolean
  language: string
  mobileMenuShow: boolean
  bridgeLoadingVisible: boolean
  bridgeLoadingStatus: number
}

const initLang = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('kcc_homepage_language') ?? 'en'
  }
  return 'en'
}

const initialState: ApplicationState = {
  blockNumber: {},
  darkMode: false,
  language: initLang(),
  mobileMenuShow: false,
  bridgeLoadingVisible: false,
  bridgeLoadingStatus: 0,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateBlockNumber, (state, action) => {
      const { chainId, blockNumber } = action.payload
      if (typeof state.blockNumber[chainId] !== 'number') {
        state.blockNumber[chainId] = blockNumber
      } else {
        state.blockNumber[chainId] = Math.max(
          blockNumber,
          state.blockNumber[chainId]
        )
      }
    })
    .addCase(changeTheme, (state, action) => {
      const { isDark } = action.payload
      if (isDark) {
        state.darkMode = true
      } else {
        state.darkMode = false
      }
    })
    .addCase(changeLanguage, (state, action) => {
      const { lng } = action.payload
      if (lng) {
        state.language = lng
      } else {
        state.language = 'en'
      }
    })
    .addCase(changeMobileMenuShow, (state, action) => {
      const { show } = action.payload
      state.mobileMenuShow = show
    })
    .addCase(updateBridgeLoading, (state, action) => {
      const { visible, status } = action.payload
      state.bridgeLoadingStatus = status
      state.bridgeLoadingVisible = visible
    })
)
