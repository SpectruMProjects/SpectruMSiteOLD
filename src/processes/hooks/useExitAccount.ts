import { useAppDispatch } from './useRedux'

import { actionClearUser } from '../store/slice'

export const useExitAccount = () => {
  const dispatch = useAppDispatch()

  return () => {
    dispatch(actionClearUser())
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }
}
