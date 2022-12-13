import { useState } from "react";

import { Card, Button, Input } from "components";
import { useAppDispatch } from "utils/hooks";
import { actionAddForm } from "page-components/auth";

import FormRegisterProps from "./FormRegister.props";
import styles from "./FormRegister.module.scss";

export function FormRegister({ className, ...props }: FormRegisterProps) {
  const dispatch = useAppDispatch();

  const [data, setData] = useState({
    username: "",
    usernameError: false,
    email: "",
    emailError: false,
    password: "",
    passwordError: false,
  });
  const {
    username,
    usernameError,
    email,
    emailError,
    password,
    passwordError,
  } = data;

  return (
    <div className={styles.wrapperFormRegister} {...props}>
      <Card>
        <h2 className={styles.title}>Регистрация</h2>
        <Input
          type='text'
          label='Логин'
          value={username}
          error={usernameError}
          setValue={(username) => setData({ ...data, username })}
        />
        <Input
          type='text'
          label='Почта'
          value={email}
          error={emailError}
          setValue={(email) => setData({ ...data, email })}
        />
        <Input
          type='text'
          label='Пароль'
          value={password}
          error={passwordError}
          setValue={(password) => setData({ ...data, password })}
          password={true}
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
          text='Подтвердить'
        />
      </Card>
      <Card className={styles.cardWrap}>
        <p>Уже зарегестрированы?</p>
        <Button
          className={styles.buttonRegister}
          onClick={(e) => {
            e.preventDefault();
            dispatch(actionAddForm(false));
          }}
          text='Войти'
        />
      </Card>
    </div>
  );
}
