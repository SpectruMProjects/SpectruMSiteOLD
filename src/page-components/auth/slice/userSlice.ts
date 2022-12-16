import { ActivateRegCodeResponse, HttpClient } from "service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { IUser } from "utils/interface";

const axios = new HttpClient();

export const fetchConfirmationAccount = createAsyncThunk(
  "@@user/confirmationAccount",
  async (code: string) => {
    const res: ActivateRegCodeResponse = await axios.activateRegCode(code);

    if (res.code === "ok") {
      return res.user;
    }

    return undefined;
  }
);

export interface CounterState {
  status: "idle" | "pending" | "rejected" | "received";
  user: IUser | undefined;
  error: string | null;
}

const initialState: CounterState = {
  status: "idle",
  user: undefined,
  error: null,
};

export const userSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchConfirmationAccount.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchConfirmationAccount.rejected, (state, action) => {
        state.status = "rejected";
        state.error = String(action.payload || action.meta);
      })
      .addCase(fetchConfirmationAccount.fulfilled, (state, action) => {
        state.status = "received";
        state.user = action.payload as unknown as IUser;
      });
  },
});

export const userReducer = userSlice.reducer;
