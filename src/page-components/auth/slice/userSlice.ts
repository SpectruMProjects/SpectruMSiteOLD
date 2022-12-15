import { ActivateRegCodeResponse, HttpClient } from "service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { IUser } from "utils/interface";

const axios = new HttpClient();

export const fetchConfirmationAccount = createAsyncThunk(
  "@@user/confirmationAccount",
  async (code: string) => {
    const res: ActivateRegCodeResponse = await axios.activateRegCode(code);

    if (res.code === "ok") {
      return {
        state: "fullfilled",
        user: res.user,
        loading: false,
        error: null,
      };
    }
    if (res.code === "error") {
      return {
        state: "error",
        user: undefined,
        loading: false,
        error: "Error request",
      };
    }
  }
);

export interface CounterState {
  state: string;
  user: IUser | undefined;
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  state: "intle",
  user: undefined,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchConfirmationAccount.pending, (state) => {
      state.loading = true;
      state.state = "pending";
      state.error = null;
      state.user = undefined;
    });
    builder.addCase(fetchConfirmationAccount.rejected, (state, action) => {
      state.loading = false;
      state.state = "rejected";
      state.error = "Error request";
      state.user = undefined;
    });
    builder.addCase(fetchConfirmationAccount.fulfilled, (state, action) => {
      //state = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
