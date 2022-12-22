import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

import {IUser} from "utils/interface";
import {fetchConfirmationAccount, fetchLoginAccount} from "../thunk"

export interface UserState {
    status: "idle" | "pending" | "rejected" | "received";
    user: IUser | undefined;
    error: string | null;
}

const initialState: UserState = {
    status: "idle",
    user: undefined,
    error: null,
};

export const userSlice = createSlice({
    name: "@@user",
    initialState,
    reducers: {
        actionClearError: ((state: Draft<UserState>) => {
            state.error = null;
        }),
    },
    extraReducers(builder) {
        builder
            .addCase(fetchConfirmationAccount.pending, (state: Draft<UserState>) => {
                state.status = "pending";
            })
            .addCase(fetchConfirmationAccount.rejected, (state: Draft<UserState>, action) => {
                state.status = "rejected";
                state.error = "Случилась неизвестная ошибка";
            })
            .addCase(fetchConfirmationAccount.fulfilled, (state: Draft<UserState>, action: PayloadAction<IUser | void>) => {
                state.status = "received";
                if (action.payload)
                    state.user = action.payload;
            })
            .addCase(fetchLoginAccount.pending, (state: Draft<UserState>) => {
                state.status = "pending";
            })
            .addCase(fetchLoginAccount.rejected, (state: Draft<UserState>, action) => {
                state.status = "rejected";
                state.error = "Случилась неизвестная ошибка";
            })
            .addCase(fetchLoginAccount.fulfilled, (state: Draft<UserState>, action: PayloadAction<IUser | void>) => {
                state.status = "received";
                if (action.payload)
                    state.user = action.payload;
            });
    },
});

export const {actionClearError} = userSlice.actions;

export const userReducer = userSlice.reducer;
