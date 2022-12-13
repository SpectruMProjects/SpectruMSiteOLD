import cn from "classnames";

import CardProps from "./Card.props";
import styles from "./Card.module.scss";

export function Card({
  children,
  className,
  ...props
}: CardProps): JSX.Element {
  return (
    <div className={cn(className, styles.wrapperCard)} {...props}>
      {children}
    </div>
  );
}
