import { createSlice } from "@reduxjs/toolkit";

import { IAction, IError } from "utils/interface";

interface INotificationState {
  loading: boolean;
  fetch: boolean;
  copy: boolean;
  errors: IError[];
  action: IAction[];
}

//
/*
{ id: "212", text: "Ошибка твоей жопы" }
{
      id: "213",
      text: "Убрать тебя и всю твою семью гнида черножопая ?",
      action: { text: "Убрать", func: () => alert("Ты мертв") },
},*/

const initialState: INotificationState = {
  loading: false,
  fetch: false,
  copy: false,
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
