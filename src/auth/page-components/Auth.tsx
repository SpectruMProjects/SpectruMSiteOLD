import cn from "classnames";

import { useAppSelector } from "utils/hooks";

import { FormLogin, FormRegister } from "./components";
import { getForm } from "store/select";

import AuthProps from "./Auth.props";
import styles from "./Auth.module.scss";

export const Auth = ({ className, ...props }: AuthProps): JSX.Element => {
  const form: boolean = useAppSelector(getForm);
  return (
    <div className={cn(className, styles.wrapperAuth)} {...props}>
      {!form ? <FormLogin /> : <FormRegister />}
    </div>
  );
};
