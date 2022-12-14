import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "page-components/auth";
import { menuListReducer } from "page-components/navbar";

export const store = configureStore({
  reducer: {
    user: userReducer,
    menuList: menuListReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
