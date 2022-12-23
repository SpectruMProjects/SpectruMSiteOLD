import { RootState } from 'store/store'

export const getLoading = (state: RootState) => state.notification.loading
export const getFetch = (state: RootState) => state.notification.fetch
export const getErrors = (state: RootState) => state.notification.errors
export const getCopy = (state: RootState) => state.notification.copy
export const getAction = (state: RootState) => state.notification.action
