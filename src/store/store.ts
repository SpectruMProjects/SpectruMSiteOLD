import { configureStore } from "@reduxjs/toolkit";

import { formReducer, userReducer } from "page-components/auth";
import { menuListReducer } from "page-components/navbar";

export const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
    menuList: menuListReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
