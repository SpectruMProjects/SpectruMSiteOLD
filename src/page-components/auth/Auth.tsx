import cn from "classnames";
import { useState } from "react";

import { FormLogin, FormRegister } from "./components";

import AuthProps from "./Auth.props";
import styles from "./Auth.module.scss";

export const Auth = ({ className, ...props }: AuthProps): JSX.Element => {
  const [form, setForm] = useState<boolean>(false);

  return (
    <div className={cn(className, styles.wrapperAuth)} {...props}>
      {!form ? (
        <FormLogin setForm={setForm} />
      ) : (
        <FormRegister setForm={setForm} />
      )}
    </div>
  );
};
