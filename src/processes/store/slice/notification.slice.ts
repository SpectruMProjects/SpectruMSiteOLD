import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { IAction, IError, INotify } from 'processes/interface'
import { fetchChangePassword, fetchRegistrationAccount } from '../thunk'

interface INotificationState {
  status: 'idle' | 'pending' | 'rejected' | 'received'
  loading: INotify
  fetch: INotify
  copy: INotify
  errors: IError[]
  action: IAction[]
}

const initialState: INotificationState = {
  status: 'idle',
  loading: { pending: false },
  fetch: { pending: false },
  copy: { pending: false },
  errors: [],
  action: [],
}

export const notificationSlice = createSlice({
  initialState,
  name: '@@notificationSlice',
  reducers: {
    actionClearNotification: () => initialState,
    actionAddLoading: (state: Draft<INotificationState>, action: PayloadAction<INotify>) => {
      state.loading = action.payload
    },
    actionAddCopy: (state: Draft<INotificationState>, action: PayloadAction<INotify>) => {
      state.copy = action.payload
    },
    actionAddFetch: (state: Draft<INotificationState>, action: PayloadAction<INotify>) => {
      state.fetch = action.payload
    },
    actionAddError: (state: Draft<INotificationState>, action: PayloadAction<IError>) => {
      state.errors.push(action.payload)
    },
    actionDeleteError: (state: Draft<INotificationState>, action: PayloadAction<string>) => {
      state.errors = state.errors.filter((error: Draft<IError>) => error.id !== action.payload)
    },
    actionAddAction: (state: Draft<INotificationState>, action: PayloadAction<IAction>) => {
      state.action.push(action.payload)
    },
    actionDeleteAction: (state: Draft<INotificationState>, action: PayloadAction<string>) => {
      state.action = state.action.filter((value: Draft<IAction>) => value.id !== action.payload)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRegistrationAccount.pending, (state: Draft<INotificationState>) => {
        state.status = 'pending'
      })
      .addCase(fetchRegistrationAccount.rejected, (state: Draft<INotificationState>, action) => {
        const id = uuidv4()

        state.status = 'rejected'
        state.errors.push({ id, text: String(action.error.message), time: 10000 })
      })
      .addCase(fetchRegistrationAccount.fulfilled, (state: Draft<INotificationState>) => {
        state.status = 'received'
      })
      .addCase(fetchChangePassword.pending, (state: Draft<INotificationState>) => {
        state.status = 'pending'
      })
      .addCase(fetchChangePassword.rejected, (state: Draft<INotificationState>, action) => {
        const id = uuidv4()

        state.status = 'rejected'
        state.errors.push({ id, text: String(action.error.message), time: 10000 })
      })
      .addCase(fetchChangePassword.fulfilled, (state: Draft<INotificationState>) => {
        state.status = 'received'
      })
  },
})

export const notificationReducer = notificationSlice.reducer

export const {
  actionClearNotification,
  actionAddFetch,
  actionAddLoading,
  actionAddError,
  actionDeleteError,
  actionAddCopy,
  actionAddAction,
  actionDeleteAction,
} = notificationSlice.actions
