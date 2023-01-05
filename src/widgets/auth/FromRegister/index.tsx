import React, { useState } from 'react'
import cn from 'classnames'

import { Card, Button, Input } from 'shared'
import { useAppDispatch, useNotification } from 'processes/hooks'
import { fetchRegistrationAccount } from 'processes/store/thunk'

import FormRegisterProps from './FormRegister.props'
import styles from './FormRegister.module.scss'

export function FormRegister({ className, setForm, ...props }: FormRegisterProps): JSX.Element {
  const notification = useNotification()
  const dispatch = useAppDispatch()

  const textError = (text: string, num: number): string =>
    `${text} должен быть не меньше ${
      num > 4 ? num + '-и' : num + '-х'
    } символов, а так же содержать латинские буквы или цифры`
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
      notification('error', time, { text: textError('Ник', 3) }, usernameError)
    }

    if (mail.match(/^.*[a-zA-Z0-9-_.]@.*[a-z][.].*[a-z]$/g) === null || mail.trim().length === 0) {
      setEmailError(true)
      notification('error', time, { text: 'Введите корректно почту' }, mailError)
    }

    if (
      password.trim().length < 8 ||
      password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/g) === null
    ) {
      setPasswordError(true)
      notification('error', time, { text: textError('Пароль', 8) }, passwordError)
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
        <h2 className={styles.title}>Регистрация</h2>
        <Input
          type='text'
          label='Логин'
          value={username}
          error={usernameError}
          setValue={setUsername}
        />
        <Input type='text' label='Почта' value={mail} error={mailError} setValue={setEmail} />
        <Input
          type='text'
          label='Пароль'
          value={password}
          error={passwordError}
          setValue={setPassword}
          password={true}
        />
        <Button onClick={handleRegistration}>Подтвердить</Button>
      </Card>
      <Card className={styles.cardWrap}>
        <p>Уже зарегистрированы?</p>
        <Button
          className={styles.buttonRegister}
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
          Войти
        </Button>
      </Card>
    </div>
  )
}
