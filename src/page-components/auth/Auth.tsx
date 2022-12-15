import cn from "classnames";
import { useState } from "react";

import { FormLogin, FormRegister } from "./components";

import AuthProps from "./Auth.props";
import styles from "./Auth.module.scss";

export const Auth = ({ className, ...props }: AuthProps): JSX.Element => {
  const [form, setForm] = useState<boolean>(false);

  return (
    <div className={cn(className, styles.wrapperAuth)} {...props}>
      <div className={styles.wrapperFormWrap}>
        <div
          className={cn(styles.wrapperForm, {
            [styles.wrapperFormOn]: !form,
          })}
        >
          <FormLogin setForm={setForm} />
        </div>
        <div
          className={cn(styles.wrapperForm, {
            [styles.wrapperFormOn]: form,
          })}
        >
          <FormRegister setForm={setForm} />
        </div>
      </div>
    </div>
  );
};
