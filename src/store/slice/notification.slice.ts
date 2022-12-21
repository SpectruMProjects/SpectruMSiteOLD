import { createSlice } from "@reduxjs/toolkit";

import { IAction, IError, INotify } from "utils/interface";

interface INotificationState {
  loading: INotify;
  fetch: INotify;
  copy: INotify;
  errors: IError[];
  action: IAction[];
}

const initialState: INotificationState = {
  loading: { pending: false },
  fetch: { pending: false },
  copy: { pending: false },
  errors: [],
  action: [],
};

export const notificationSlice = createSlice({
  initialState,
  name: "@@notificationSlice",
  reducers: {
    actionClearNotification: () => initialState,
    actionAddLoading: (state, action) => {
      state.loading = action.payload;
    },
    actionAddCopy: (state, action) => {
      state.copy = action.payload;
    },
    actionAddFetch: (state, action) => {
      state.fetch = action.payload;
    },
    actionAddError: (state, action) => {
      state.errors.push(action.payload);
    },
    actionDeleteError: (state, action) => {
      state.errors = state.errors.filter(
        (error) => String(error.id) !== String(action.payload)
      );
    },
    actionAddAction: (state, action) => {
      state.action = state.action.filter(
        (actio) => String(actio.id) !== String(action.payload)
      );
    },
    actionDeleteAction: (state, action) => {
      state.action = state.action.filter(
        (actio) => String(actio.id) !== String(action.payload)
      );
    },
  },
});

export const notificationReducer = notificationSlice.reducer;

export const {
  actionClearNotification,
  actionAddFetch,
  actionAddLoading,
  actionAddError,
  actionDeleteError,
  actionAddCopy,
  actionAddAction,
  actionDeleteAction,
} = notificationSlice.actions;
