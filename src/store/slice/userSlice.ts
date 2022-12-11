import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: number;
}

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

export const {} = userSlice.actions;
