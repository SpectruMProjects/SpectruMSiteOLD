import { useState } from "react";

import { Card, Button, Input } from "components";

import FormRegisterProps from "./FormRegister.props";
import styles from "./FormRegister.module.scss";

export function FormRegister({
  className,
  setForm,
  ...props
}: FormRegisterProps) {
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleRegistration = () => {
    setUsernameError(false);
    setEmailError(false);
    setPasswordError(false);

    if (
      username.replaceAll(" ", "").length < 3 ||
      username.replace(/^.*[a-zA-Z0-9]$/g, "") !== ""
    ) {
      setUsernameError(true);
    }

    if (
      email.replace(/^.*[a-zA-Z0-9-_.]@.*[a-z][.].*[a-z]$/g, "") !== "" ||
      email.replaceAll(" ", "").length === 0
    ) {
      setEmailError(true);
    }

    if (
      password.replaceAll(" ", "").length < 8 ||
      password.replace(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/g,
        ""
      ) !== ""
    ) {
      setPasswordError(true);
    }
  };

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
        <Input
          type='text'
          label='Почта'
          value={email}
          error={emailError}
          setValue={setEmail}
        />
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
            setForm(false);
            setUsername("");
            setUsernameError(false);
            setEmail("");
            setEmailError(false);
            setPassword("");
            setPasswordError(false);
          }}
          text='Войти'
        />
      </Card>
    </div>
  );
}
