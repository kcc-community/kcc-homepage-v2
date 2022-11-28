import { useSelector } from 'react-redux'

// import { addPopup, PopupContent, removePopup, toggleWalletModal, toggleSettingsMenu } from './actions'
import { AppState } from '../index'

export function useBlockNumber(): number | undefined {
  return useSelector((state: AppState) => 0)
}

export function useDark(): boolean {
  return useSelector((state: AppState) => state.application.darkMode === true)
}

export function useLanguage(): string {
  return useSelector((state: AppState) => state.application.language)
}

export function useMobileMenuShow(): boolean {
  return useSelector((state: AppState) => state.application.mobileMenuShow)
}

export function useBridgeLoading(): { visible: boolean; status: number } {
  return useSelector((state: AppState) => {
    return {
      visible: state.application.bridgeLoadingVisible,
      status: state.application.bridgeLoadingStatus,
    }
  })
}

export function useBridgeLoadingVisible(): boolean {
  return useSelector((state: AppState) => {
    return state.application.bridgeLoadingVisible
  })
}

// get the list of active popups
/* export function useActivePopups(): AppState['application']['popupList'] {
  const list = useSelector((state: AppState) => state.application.popupList)
  return useMemo(() => list.filter(item => item.show), [list])
} */
