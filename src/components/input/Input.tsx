import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import cn from "classnames";

import InputProps from "./Input.props";
import styles from "./Input.module.scss";

export function Input({
  value,
  setValue,
  className,
  type,
  error,
  password = false,
  label,
  ...props
}: InputProps): JSX.Element {
  const [focus, setFocus] = useState<boolean>(false);
  const [visibility, setVisibility] = useState<boolean>(false);

  const focusStyle = (): boolean => {
    if (focus) return true;
    else {
      if (value.replaceAll(" ", "").length !== 0) return true;
      else return false;
    }
  };

  return (
    <div className={styles.wrapperInput}>
      <label
        className={cn(styles.labelInput, {
          [styles.labelInputOn]: focusStyle(),
        })}
      >
        {label}
      </label>
      <input
        className={cn(className, styles.input, {
          [styles.inputOnError]: error,
          [styles.inputOnFocus]: focus,
          [styles.inputPasswordOn]: password,
        })}
        onFocusCapture={() => setFocus(true)}
        onBlurCapture={() => setFocus(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={password ? (visibility ? "text" : "password") : type}
        {...props}
      />
      {password ? (
        <button
          className={styles.visibilityIcon}
          onClick={() => setVisibility(!visibility)}
        >
          {!visibility ? <Visibility /> : <VisibilityOff />}
        </button>
      ) : null}
    </div>
  );
}
