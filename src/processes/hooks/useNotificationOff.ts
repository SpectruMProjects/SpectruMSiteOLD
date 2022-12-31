import { IAction, IError, INotify } from 'processes/interface'

import { useAppDispatch } from './useRedux'
import { PayloadAction } from '@reduxjs/toolkit'

export function useNotificationOff(
  type: 'object',
): (value: INotify, action: (val: INotify) => PayloadAction<INotify>) => void
export function useNotificationOff(
  type: 'array',
): (value: IAction | IError, action: (val: string) => PayloadAction<string>) => void
export function useNotificationOff(type: 'object' | 'array') {
  const dispatch = useAppDispatch()

  if (type === 'object') {
    return (value: INotify, action: (val: INotify) => PayloadAction<INotify>): void => {
      if (value.pending) {
        setTimeout(() => {
          dispatch(action({ pending: false, time: value.time ?? 5000 }))
        }, value.time ?? 5000)
      }
    }
  }

  if (type === 'array') {
    return (value: IAction | IError, action: (val: string) => PayloadAction<string>): void => {
      setTimeout(() => {
        dispatch(action(value.id))
      }, value.time ?? 5000)
    }
  }
}
