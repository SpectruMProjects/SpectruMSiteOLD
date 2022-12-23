import React, { useEffect, useState } from 'react'
import cn from 'classnames'

import { Card, Button, Input } from 'components'
import { useAppDispatch, useAppSelector, useNotification } from 'utils/hooks'
import { fetchLoginAccount } from 'store/thunk'
import { getUserError } from 'store/select'
import { actionClearError } from 'store/slice'

import FormLoginProps from './FormLogin.props'
import styles from './FormLogin.module.scss'

export function FormLogin({ className, setForm, ...props }: FormLoginProps): JSX.Element {
  const dispatch = useAppDispatch()
  const notification = useNotification()

  const userError = useAppSelector(getUserError)

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [loginError, setLoginError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const handleLogin = async () => {
    if (login.trim().length < 3) {
      notification('error', { text: 'Логин должна содержать не меньше 3-х симоволов' }, 5000)
      setLoginError(true)
    }
    if (login.trim().length >= 3) {
      setLoginError(false)
    }
    if (password.trim().length < 8) {
      notification('error', { text: 'Пароль должна содержать не меньше 8-х симоволов' }, 5000)
      setPasswordError(true)
    }
    if (password.trim().length >= 8) {
      setPasswordError(false)
    }

    if (!loginError && !passwordError) {
      await dispatch(fetchLoginAccount({ login, password }))
    }
  }
  useEffect(() => {
    if (userError) {
      notification('error', { text: userError }, 5000)
      dispatch(actionClearError())
      setLoginError(true)
      setPasswordError(true)
    }
  }, [userError])

  return (
    <div className={cn(className, styles.wrapperFormLogin)} {...props}>
      <Card>
        <h2 className={styles.title}>Авторизация</h2>
        <Input value={login} setValue={setLogin} error={loginError} label='Логин' />
        <Input
          value={password}
          setValue={setPassword}
          error={passwordError}
          password={true}
          label='Пароль'
        />
        <Button
          onClick={(e) => {
            e.preventDefault()
            handleLogin()
          }}
          text='Подтвердить'
        />
      </Card>
      <Card className={styles.cardWrap}>
        <p>Нет аккаунта?</p>
        <Button
          className={styles.buttonRegister}
          onClick={() => {
            setForm(true)
            setLogin('')
            setLoginError(false)
            setPassword('')
            setPasswordError(false)
          }}
          text='Регистрация'
        />
      </Card>
    </div>
  )
}
