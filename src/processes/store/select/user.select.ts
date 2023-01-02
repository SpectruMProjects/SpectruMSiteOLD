import { RootState } from 'processes/store'

export const getUser = (state: RootState) => state.user.user
export const getUserError = (state: RootState) => state.user.error
export const getUserRoles = (state: RootState) => state.user.roles
