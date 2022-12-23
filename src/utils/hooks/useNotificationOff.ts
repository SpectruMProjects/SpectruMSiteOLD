import { IAction, IError, INotify } from 'utils/interface'

import { useAppDispatch } from './useRedux'

export function useNotificationOff(
  type: 'object',
): (value: INotify, action: (val: { pending: boolean }) => any) => void
export function useNotificationOff(
  type: 'array',
): (value: IAction | IError, action: (val: string) => any) => void
export function useNotificationOff(type: 'object' | 'array') {
  const dispatch = useAppDispatch()

  if (type === 'object') {
    return (value: INotify, action: (val: { pending: boolean }) => any): void => {
      if (value.pending) {
        setTimeout(() => {
          dispatch(action({ pending: false }))
        }, value.time ?? 3000)
      }
    }
  }

  if (type === 'array') {
    return (value: IAction | IError, action: (val: string) => any): void => {
      setTimeout(() => {
        dispatch(action(value.id))
      }, value.time ?? 3000)
    }
  }
}
