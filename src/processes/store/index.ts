import { configureStore } from '@reduxjs/toolkit'

import { notificationReducer, menuListReducer, userReducer, themeReducer } from './slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    menuList: menuListReducer,
    notification: notificationReducer,
    theme: themeReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
