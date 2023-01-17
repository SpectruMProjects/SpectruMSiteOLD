import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import cn from 'classnames'

import { useAppDispatch, useAppSelector, useExitAccount, useNotification } from 'processes/hooks'
import { fetchConfirmationAccount, fetchConfirmationPassAccount } from 'processes/store/thunk'
import { getLanguage } from 'processes/store/select'
import { CardPage } from 'shared/cardPage'
import { LoadingIcon } from 'app/assets/svg'

import confirmationProps from './Confirmation.props'
import styles from './Confirmation.module.scss'

const ConfirmationPage = ({ type, className, ...props }: confirmationProps): JSX.Element => {
  const { code } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const notification = useNotification()
  const exitAccount = useExitAccount()

  const { confirmation } = useAppSelector(getLanguage)

  useEffect(() => {
    exitAccount()
    if (code) {
      if (type === 'account')
        dispatch(fetchConfirmationAccount(code))
          .then(() => {
            const token = localStorage.get('accessToken')
            if (token) {
              navigate('/profile')
              notification('action', 5000, { text: 'Аккаунт активирован!' })
            }
          })
          .catch((error) => {
            notification('error', 5000, { text: error.text })
          })
      if (type === 'password')
        dispatch(fetchConfirmationPassAccount(code))
          .then(() => {
            const token = localStorage.get('accessToken')
            if (token) {
              navigate('/profile')
              notification('action', 5000, { text: 'Пароль был изменен!' })
            }
          })
          .catch((error) => {
            notification('error', 5000, { text: error.text })
          })
    }
  }, [])

  return (
    <CardPage className={cn(className, styles.wrapperConf)} {...props}>
      <div className={styles.loadWrapper}>
        <LoadingIcon className={styles.loadIcon} />
        <p>{confirmation.load}</p>
      </div>
    </CardPage>
  )
}

export default ConfirmationPage
