import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "utils/interface";

export interface CounterState {
  user: IUser | undefined;
}

const initialState: CounterState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;

//export const {} = userSlice.actions;
