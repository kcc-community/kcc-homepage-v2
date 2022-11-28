import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import application from './application/reducer'

const store = configureStore({
  reducer: {
    application,
  },
  middleware: [...getDefaultMiddleware({ thunk: false })],
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
