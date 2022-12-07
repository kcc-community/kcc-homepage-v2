import { useSelector } from 'react-redux'
import { AppState } from 'state'

export function useAppCategoryList() {
  return useSelector((state: AppState) => state.apps.appCategoryList)
}
