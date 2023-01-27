import { RootState } from 'processes/store'

export const getUser = (state: RootState) => state.user.user
export const getUserHardcore = (state: RootState) => state.user.hardcore
export const getUserRoles = (state: RootState) => state.user.roles
