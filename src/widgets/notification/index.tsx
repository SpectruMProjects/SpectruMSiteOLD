import React from 'react'
import cn from 'classnames'
import { QuestionMark, PublicOff, ContentCopy, Info } from '@mui/icons-material'

import { useAppDispatch, useAppSelector, useNotificationOff } from 'processes/hooks'
import { getAction, getCopy, getErrors, getFetch, getLoading } from 'processes/store/select'
import {
  actionAddCopy,
  actionAddFetch,
  actionAddLoading,
  actionDeleteAction,
  actionDeleteError,
} from 'processes/store/slice'
import { LoadingIcon } from 'app/assets/svg'
import { NotifyCard } from 'shared'

import NotificationProps from './Notification.props'
import styles from './Notification.module.scss'

export const Notification = ({ className, ...props }: NotificationProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const notificationObject = useNotificationOff('object')
  const notificationArray = useNotificationOff('array')

  const errors = useAppSelector(getErrors)
  const action = useAppSelector(getAction)
  const loading = useAppSelector(getLoading)
  const copy = useAppSelector(getCopy)
  const fetch = useAppSelector(getFetch)

  notificationObject(loading, actionAddLoading)
  notificationObject(copy, actionAddCopy)
  notificationObject(fetch, actionAddFetch)

  return (
    <section className={cn(className, styles.notificationWrapper)} {...props}>
      {action !== null &&
        action.map(({ id, text, action, time }) => {
          notificationArray({ id, time, text, action }, actionDeleteAction)
          return (
            <NotifyCard
              key={id}
              icon={<QuestionMark />}
              time={time}
              text={text}
              color={'mauve'}
              remove={() => dispatch(actionDeleteAction(id))}
              action={
                action && {
                  func: action.func,
                  text: action.text,
                }
              }
            />
          )
        })}
      {errors !== null &&
        errors.map(({ id, time, text }) => {
          notificationArray({ id, time, text }, actionDeleteError)
          return (
            <NotifyCard
              key={id}
              time={time}
              icon={<Info />}
              text={text}
              color={'danger'}
              remove={() => dispatch(actionDeleteError(id))}
            />
          )
        })}
      {copy.pending && (
        <NotifyCard
          icon={<ContentCopy />}
          time={copy.time}
          text={'Строка скопирована'}
          color={'success'}
        />
      )}
      {loading.pending && (
        <NotifyCard
          icon={<LoadingIcon />}
          time={loading.time}
          text={'Загрузка данных...'}
          color={'secondary'}
        />
      )}
      {fetch.pending && (
        <NotifyCard
          icon={<PublicOff />}
          time={fetch.time}
          text={'Нету подключения к серверу...'}
          color={'warning'}
        />
      )}
    </section>
  )
}
