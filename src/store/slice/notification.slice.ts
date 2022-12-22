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
    actionAddLoading: (state, action: { payload: INotify }) => {
      state.loading = action.payload;
    },
    actionAddCopy: (state, action: { payload: INotify }) => {
      state.copy = action.payload;
    },
    actionAddFetch: (state, action: { payload: INotify }) => {
      state.fetch = action.payload;
    },
    actionAddError: (state, action: { payload: IError }) => {
      state.errors.push(action.payload);
    },
    actionDeleteError: (state, action: { payload: string }) => {
      state.errors = state.errors.filter(
        (error) => error.id !== action.payload
      );
    },
    actionAddAction: (state, action: { payload: IAction }) => {
      state.action.push(action.payload)
    },
    actionDeleteAction: (state, action: { payload: string }) => {
      state.action = state.action.filter(
        (_) => _.id !== action.payload
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
