import React, { useState } from 'react'

import { Card, Button, Input } from 'components'
import { useAppDispatch, useNotification } from 'utils/hooks'
import { fetchRegistrationAccount } from 'store/thunk'

import FormRegisterProps from './FormRegister.props'
import styles from './FormRegister.module.scss'

export function FormRegister({ className, setForm, ...props }: FormRegisterProps) {
  const notification = useNotification()
  const dispatch = useAppDispatch()

  const textError = (text: string, num: number): string =>
    `${text} должен быть не меньше ${
      num > 4 ? num + '-и' : num + '-х'
    } символов, а так же содержать латинские буквы или цифры.`

  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState(false)
  const [mail, setEmail] = useState('')
  const [mailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const handleRegistration = async () => {
    setUsernameError(false)
    setEmailError(false)
    setPasswordError(false)

    if (username.trim().length < 3 || username.match(/^.*[a-zA-Z0-9]$/g) === null) {
      notification('error', { text: textError('Ник', 3) }, 5000)
      setUsernameError(true)
    }

    if (mail.match(/^.*[a-zA-Z0-9-_.]@.*[a-z][.].*[a-z]$/g) === null || mail.trim().length === 0) {
      notification('error', { text: 'Введите корректно почту.' }, 5000)
      setEmailError(true)
    }

    if (
      password.trim().length < 8 ||
      password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/g) === null
    ) {
      notification('error', { text: textError('Пароль', 8) }, 5000)
      setPasswordError(true)
    }

    if (!usernameError && !mailError && !passwordError) {
      await dispatch(fetchRegistrationAccount({ mail, username, password }))
    }
  }

  return (
    <div className={styles.wrapperFormRegister} {...props}>
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
        <Button onClick={handleRegistration} text='Подтвердить' />
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
          text='Войти'
        />
      </Card>
    </div>
  )
}
