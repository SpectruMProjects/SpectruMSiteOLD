import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import cn from 'classnames'

import { useAppDispatch, useAppSelector, useNotification } from 'processes/hooks'
import { IUser } from 'processes/interface'
import { getUser, getUserError } from 'processes/store/select'
import { actionClearError } from 'processes/store/slice'
import { fetchConfirmationAccount } from 'processes/store/thunk'
import { CardPage } from 'shared/cardPage'
import { LoadingIcon } from 'app/assets/svg'

import styles from './Confirmation.module.scss'

const ConfirmationPage = (): JSX.Element => {
  const { pathname } = useLocation()
  const { code } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const notification = useNotification()

  const user: IUser | undefined = useAppSelector(getUser)
  const userError = useAppSelector(getUserError)

  const [load, setLoad] = useState<boolean>(true)
  const [close, setClose] = useState<boolean>(false)

  useEffect(() => {
    if (user === undefined) {
      if (code) dispatch(fetchConfirmationAccount(code))
    }
    if (user !== undefined) {
      setLoad(false)

      setTimeout(() => {
        setClose(true)
      }, 4800)
    }
  }, [code, pathname, user])

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        if (window.location.pathname === pathname) navigate('/profile')
      }, 5000)
    }
  }, [user])

  useEffect(() => {
    if (userError) {
      notification('error', 5000, { text: userError })
      dispatch(actionClearError())
    }
  }, [userError])

  return (
    <CardPage className={styles.wrapperConf}>
      <div>
        {load ? (
          <div
            className={cn(styles.loadWrapper, {
              [styles.loadWrapperOn]: load,
            })}
          >
            <LoadingIcon className={styles.loadicon} />
            <p>Ожидание подтверждения...</p>
          </div>
        ) : (
          user && (
            <div
              className={cn(styles.loadWrapperAccess, {
                [styles.loadWrapperAccessOn]: !load,
                [styles.loadWrapperAccessOff]: close,
              })}
            >
              <p className={styles.textName}>
                Добро пожаловать, <p>{user.username}</p>!
              </p>
              <p className={styles.textBottom}>
                Через несколько секунд вы будете перемещены на страницу профиля...
              </p>
            </div>
          )
        )}
      </div>
    </CardPage>
  )
}

export default ConfirmationPage