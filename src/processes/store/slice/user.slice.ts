import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { IUser } from 'processes/interface'
import {
  fetchConfirmationAccount,
  fetchConfirmationRoles,
  fetchGetUser,
  fetchLoginAccount,
} from '../thunk'

export interface UserState {
  status: 'idle' | 'pending' | 'rejected' | 'received'
  user: IUser | undefined
  error: string | null
  roles: string[]
}

const initialState: UserState = {
  status: 'idle',
  user: undefined,
  error: null,
  roles: [],
}

export const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {
    actionClearError: (state: Draft<UserState>) => {
      state.error = null
    },
    actionClearUser: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchConfirmationAccount.pending, (state: Draft<UserState>) => {
        state.status = 'pending'
      })
      .addCase(fetchConfirmationAccount.rejected, (state: Draft<UserState>, action) => {
        state.status = 'rejected'
        state.error = String(action.error.message)
      })
      .addCase(
        fetchConfirmationAccount.fulfilled,
        (state: Draft<UserState>, action: PayloadAction<IUser | void>) => {
          state.status = 'received'
          if (action.payload) state.user = action.payload
        },
      )
      .addCase(fetchLoginAccount.pending, (state: Draft<UserState>) => {
        state.status = 'pending'
      })
      .addCase(fetchLoginAccount.rejected, (state: Draft<UserState>, action) => {
        state.status = 'rejected'
        state.error = String(action.error.message)
      })
      .addCase(
        fetchLoginAccount.fulfilled,
        (state: Draft<UserState>, action: PayloadAction<IUser | void>) => {
          state.status = 'received'
          if (action.payload) state.user = action.payload
        },
      )
      .addCase(
        fetchGetUser.fulfilled,
        (state: Draft<UserState>, action: PayloadAction<IUser | void>) => {
          state.status = 'received'
          if (action.payload) state.user = action.payload
        },
      )
      .addCase(fetchGetUser.pending, (state: Draft<UserState>) => {
        state.status = 'pending'
      })
      .addCase(fetchGetUser.rejected, (state: Draft<UserState>, action) => {
        state.status = 'rejected'
        state.error = String(action.error.message)
      })
      .addCase(fetchConfirmationRoles.pending, (state: Draft<UserState>) => {
        state.status = 'pending'
      })
      .addCase(fetchConfirmationRoles.rejected, (state: Draft<UserState>, action) => {
        state.status = 'rejected'
        state.error = String(action.error.message)
      })
      .addCase(
        fetchConfirmationRoles.fulfilled,
        (state: Draft<UserState>, action: PayloadAction<string[] | void>) => {
          state.status = 'received'
          if (action.payload) state.roles = action.payload
        },
      )
  },
})

export const { actionClearError, actionClearUser } = userSlice.actions

export const userReducer = userSlice.reducer
