import { RootState } from 'store/store'
import { UserState } from '../slice'

export const getUser = (state: RootState) => state.user.user
export const getUserError = (state: RootState) => state.user.error
