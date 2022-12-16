import { createSlice } from "@reduxjs/toolkit";

interface error {
  text: string;
  id: any;
}

interface INotificationState {
  loading: boolean;
  fetch: boolean;
  errors: error[];
  copy: boolean;
}

const initialState: INotificationState = {
  loading: false,
  fetch: false,
  errors: [],
  copy: false,
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
} = notificationSlice.actions;
