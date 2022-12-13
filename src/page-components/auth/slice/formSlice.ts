import { createSlice } from "@reduxjs/toolkit";

export interface FormState {
  form: boolean;
}

const initialState: FormState = {
  form: false,
};

export const formSlice = createSlice({
  name: "@@form",
  initialState,
  reducers: {
    actionClearForm: () => initialState,
    actionAddForm: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const formReducer = formSlice.reducer;

export const { actionClearForm, actionAddForm } = formSlice.actions;
