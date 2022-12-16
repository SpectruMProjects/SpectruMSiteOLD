import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "page-components/auth";
import { menuListReducer } from "page-components/navbar";
import { notificationReducer } from "./slice/notificationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    menuList: menuListReducer,
    notification: notificationReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
