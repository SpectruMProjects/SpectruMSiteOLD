import React, { useState } from 'react'
import cn from 'classnames'

import { Card, Button, Input } from 'shared'
import { useAppDispatch, useAppSelector, useNotification } from 'processes/hooks'
import { fetchRegistrationAccount } from 'processes/store/thunk'
import { getLanguage } from 'processes/store/select'

import FormRegisterProps from './FormRegister.props'
import styles from './FormRegister.module.scss'

export function FormRegister({ className, setForm, ...props }: FormRegisterProps): JSX.Element {
  const notification = useNotification()
  const dispatch = useAppDispatch()

  const { auth, error } = useAppSelector(getLanguage)

  const time = 5000

  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState(false)
  const [mail, setEmail] = useState('')
  const [mailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const handleRegistration = () => {
    setUsernameError(false)
    setEmailError(false)
    setPasswordError(false)

    if (username.trim().length < 3 || username.match(/^.*[a-zA-Z0-9]$/g) === null) {
      setUsernameError(true)
      notification('error', time, { text: error.errorFormSignUp.nicknameError }, usernameError)
    }

    if (mail.match(/^.*[a-zA-Z0-9-_.]@.*[a-z][.].*[a-z]$/g) === null || mail.trim().length === 0) {
      setEmailError(true)
      notification('error', time, { text: error.errorFormSignUp.mailError }, mailError)
    }

    if (
      password.trim().length < 8 ||
      password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/g) === null
    ) {
      setPasswordError(true)
      notification('error', time, { text: error.errorFormSignUp.passwordError }, passwordError)
    }

    if (
      (username.trim().length > 3 || username.match(/^.*[a-zA-Z0-9]$/g) !== null) &&
      (mail.match(/^.*[a-zA-Z0-9-_.]@.*[a-z][.].*[a-z]$/g) !== null || mail.trim().length !== 0) &&
      (password.trim().length > 8 ||
        password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/g) !== null)
    ) {
      dispatch(fetchRegistrationAccount({ mail, username, password })).then(() => {
        setUsername('')
        setEmail('')
        setPassword('')
      })
    }
  }

  return (
    <div className={cn(className, styles.wrapperFormRegister)} {...props}>
      <Card>
        <h2 className={styles.title}>{auth.registration.head}</h2>
        <Input
          type='text'
          label={auth.registration.login}
          value={username}
          error={usernameError}
          setValue={setUsername}
        />
        <Input
          type='text'
          label={auth.registration.email}
          value={mail}
          error={mailError}
          setValue={setEmail}
        />
        <Input
          type='text'
          label={auth.registration.pass}
          value={password}
          error={passwordError}
          setValue={setPassword}
          password={true}
        />
        <Button onClick={handleRegistration}>{auth.registration.successbutton}</Button>
      </Card>
      <Card className={styles.cardWrap}>
        <p>{auth.registration.haveacc}</p>
        <Button
          color={'purple'}
          onClick={() => {
            setForm(false)
            setUsername('')
            setUsernameError(false)
            setEmail('')
            setEmailError(false)
            setPassword('')
            setPasswordError(false)
          }}
        >
          {auth.registration.signup}
        </Button>
      </Card>
    </div>
  )
}
