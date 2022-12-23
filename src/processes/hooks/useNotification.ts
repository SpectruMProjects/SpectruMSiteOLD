import { v4 as uuidv4 } from 'uuid'

import {
  actionAddAction,
  actionAddCopy,
  actionAddError,
  actionAddFetch,
  actionAddLoading,
} from 'processes/store/slice'
import { useAppDispatch } from 'processes/hooks'

export function useNotification() {
  const dispatch = useAppDispatch()

  return function (
    object: 'loading' | 'copy' | 'fetch' | 'error' | 'action',
    type: { action?: { func: () => void; text: string }; text: string },
    time = 3000,
    flag?: boolean,
  ): void {
    const id = uuidv4()

    if (object) {
      switch (object) {
        case 'loading': {
          if (flag !== undefined) {
            if (!flag) dispatch(actionAddLoading({ pending: true, time }))
          } else {
            dispatch(actionAddLoading({ pending: true, time }))
          }
          break
        }
        case 'copy': {
          if (flag !== undefined) {
            if (!flag) dispatch(actionAddCopy({ pending: true, time }))
          } else {
            dispatch(actionAddCopy({ pending: true, time }))
          }
          break
        }
        case 'fetch': {
          if (flag !== undefined) {
            if (!flag) dispatch(actionAddFetch({ pending: true, time }))
          } else {
            dispatch(actionAddFetch({ pending: true, time }))
          }
          break
        }
        case 'error': {
          if (flag !== undefined) {
            if (!flag) if (type) dispatch(actionAddError({ id, text: type.text, time }))
          } else {
            if (type) dispatch(actionAddError({ id, text: type.text, time }))
          }
          break
        }
        case 'action': {
          if (flag !== undefined) {
            if (!flag)
              if (type)
                dispatch(
                  actionAddAction({
                    id,
                    text: type.text,
                    time,
                    action: type.action,
                  }),
                )
          } else {
            if (type)
              dispatch(
                actionAddAction({
                  id,
                  text: type.text,
                  time,
                  action: type.action,
                }),
              )
          }
          break
        }
      }
    }
  }
}
