import cn from "classnames";

import ButtonProps from "./Button.props";
import styles from "./Button.module.scss";

export function Button({
  children,
  text,
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className={cn(className, styles.buttonWrapper)} {...props}>
      {text}
    </button>
  );
}
