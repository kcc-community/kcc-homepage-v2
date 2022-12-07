import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import application from './application/reducer'
import apps from './apps/reducer'

const store = configureStore({
  reducer: {
    application,
    apps,
  },
  middleware: [...getDefaultMiddleware({ thunk: false })],
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
