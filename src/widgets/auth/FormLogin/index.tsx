import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { Card, Button, Input } from 'shared'
import { useAppDispatch, useAppSelector, useNotification } from 'processes/hooks'
import { fetchLoginAccount } from 'processes/store/thunk'
import { getLanguage } from 'processes/store/select'

import FormLoginProps from './FormLogin.props'
import styles from './FormLogin.module.scss'

export function FormLogin({ className, setForm, ...props }: FormLoginProps): JSX.Element {
  const dispatch = useAppDispatch()
  const notification = useNotification()
  const navigate = useNavigate()

  const { auth, error } = useAppSelector(getLanguage)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [loginError, setLoginError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const stateForm = useRef({ login: '', password: '' })

  const handleLogin = () => {
    if (login.trim().length < 3) {
      setLoginError(true)
      notification('error', 5000, { text: error.errorFormLogin.loginLength }, loginError)
    }

    if (password.trim().length < 8) {
      setPasswordError(true)
      notification('error', 5000, { text: error.errorFormLogin.passwordLength }, passwordError)
    }

    if (password.trim().length >= 8) {
      setPasswordError(false)
    }

    if (login.trim().length >= 3) {
      setLoginError(false)
    }

    if (password.trim().length >= 8 && login.trim().length >= 3) {
      if (stateForm.current.login === login && stateForm.current.password === password) {
        setLoginError(true)
        setPasswordError(true)
      } else {
        setLoginError(false)
        setPasswordError(false)
        dispatch(fetchLoginAccount({ login, password })).then(() => {
          const token = localStorage.getItem('accessToken')
          if (token) {
            navigate('/profile')
          }
          if (!token) {
            stateForm.current.login = login
            stateForm.current.password = password
            setLoginError(true)
            setPasswordError(true)
          }
        })
      }
    }
  }

  return (
    <div className={cn(className, styles.wrapperFormLogin)} {...props}>
      <Card>
        <h2 className={styles.title}>{auth.login.head}</h2>
        <Input value={login} setValue={setLogin} error={loginError} label={auth.login.login} />
        <Input
          value={password}
          setValue={setPassword}
          error={passwordError}
          password={true}
          label={auth.login.pass}
        />
        <Button
          onClick={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          {auth.login.successbutton}
        </Button>
      </Card>
      <Card className={styles.cardWrap}>
        <p>{auth.login.noacc}</p>
        <Button
          color={'purple'}
          onClick={() => {
            setForm(true)
            setLogin('')
            setLoginError(false)
            setPassword('')
            setPasswordError(false)
          }}
        >
          {auth.login.register}
        </Button>
      </Card>
    </div>
  )
}
