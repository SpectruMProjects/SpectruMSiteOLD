import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

export interface ThemeState {
    theme: boolean;
}

const initialState: ThemeState = {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches,
};

export const themeSlice = createSlice({
    name: "@@user",
    initialState,
    reducers: {
        actionClearTheme: () => initialState,
        actionChangeTheme: (state: Draft<ThemeState>, action: PayloadAction<boolean>) => {
            state.theme = action.payload;
        },
    },
});

export const themeReducer = themeSlice.reducer;

export const {actionChangeTheme, actionClearTheme} = themeSlice.actions;
