import { useState } from "react";
import cn from "classnames";

import { Card, Button, Input } from "components";

import FormLoginProps from "./FormLogin.props";
import styles from "./FormLogin.module.scss";

export function FormLogin({
  className,
  setForm,
  ...props
}: FormLoginProps): JSX.Element {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loginError, setLoginError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleLogin = () => {
    if (login.replaceAll(" ", "").length < 3) {
      setLoginError(true);
    }
    if (login.replaceAll(" ", "").length >= 3) {
      setLoginError(false);
    }
    if (password.replaceAll(" ", "").length < 8) {
      setPasswordError(true);
    }
    if (password.replaceAll(" ", "").length >= 8) {
      setPasswordError(false);
    }
  };

  return (
    <div className={cn(className, styles.wrapperFormLogin)} {...props}>
      <Card>
        <h2 className={styles.title}>Авторизация</h2>
        <Input
          value={login}
          setValue={setLogin}
          error={loginError}
          label='Логин'
        />
        <Input
          value={password}
          setValue={setPassword}
          error={passwordError}
          password={true}
          label='Пароль'
        />
        <Button
          className={styles.buttonLogin}
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          text='Подтвердить'
        />
      </Card>
      <Card className={styles.cardWrap}>
        <p>Нет аккаунта?</p>
        <Button
          className={styles.buttonRegister}
          onClick={() => {
            setForm(true);
          }}
          text='Регистрация'
        />
      </Card>
    </div>
  );
}
