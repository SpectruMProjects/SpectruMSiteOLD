import React, { useEffect, useState } from 'react'
import { ContentCopy } from '@mui/icons-material'

import { CardPage } from 'shared/cardPage'
import { useAppDispatch, useAppSelector, useNotification } from 'processes/hooks'
import { fetchChangePassword, fetchGetUser } from 'processes/store/thunk'
import { getUser } from 'processes/store/select'
import { Button, Input } from 'shared'

import styles from './Profile.module.scss'

const ProfilePage = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const notification = useNotification()

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const user = useAppSelector(getUser)

  const handleCopy = (value: string): void => {
    navigator.clipboard.writeText(value)
    notification('copy', 5000)
  }

  const handleChangePassword = (value: string, setPasswordError: (val: boolean) => void): void => {
    if (
      password.trim().length === 0 ||
      password.trim().length < 8 ||
      password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/g) === null
    ) {
      setPasswordError(true)
      notification(
        'error',
        5000,
        {
          text: 'Пароль должен содержать не меньше 8 символом, а так же иметь хотя бы одну цыфру и одну большую букву',
        },
        passwordError,
      )
    }
    if (
      password.trim().length > 8 &&
      password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/g) !== null &&
      password.trim().length !== 0 &&
      user
    ) {
      setPassword('')
      setPasswordError(false)
      dispatch(fetchChangePassword({ mail: user.mail, newPass: password }))
    }
  }

  useEffect(() => {
    dispatch(fetchGetUser(null))
  }, [])

  return (
    <CardPage>
      <div className={styles.wrapperProfile}>
        <h2>Профиль</h2>
        {user && (
          <div className={styles.wrapperInfoProfile}>
            <p>
              Никнейм:{' '}
              <button className={styles.wrapperButton} onClick={() => handleCopy(user.username)}>
                <ContentCopy />
                <span>{user.username}</span>
              </button>
            </p>
            <p>
              Почта:{' '}
              <button className={styles.wrapperButton} onClick={() => handleCopy(user.mail)}>
                <ContentCopy />
                <span>{user.mail}</span>
              </button>
            </p>
            <div className={styles.changePassword}>
              <p>Смена пароля</p>
              <Input
                value={password}
                setValue={setPassword}
                error={passwordError}
                label={'Новый пароль'}
                password={true}
              />
              <Button
                className={styles.wrapperChangePass}
                onClick={() => handleChangePassword(password, setPasswordError)}
              >
                Подтвердить
              </Button>
            </div>
          </div>
        )}
      </div>
    </CardPage>
  )
}

export default ProfilePage
