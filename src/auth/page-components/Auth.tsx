import { LoginForm, RegisterForm } from "./components";

import styles from "./Auth.module.scss";

export const Auth = (): JSX.Element => {
  return (
    <div className={styles.wrapperAuth}>
      <div>{"login" === "login" ? <LoginForm /> : <RegisterForm />}</div>
    </div>
  );
};
