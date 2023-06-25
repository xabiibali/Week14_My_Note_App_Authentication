import { configureStore } from '@reduxjs/toolkit'
import { noteApi } from './api/NoteSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [noteApi.reducerPath]: noteApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),

})

setupListeners(store.dispatch)

