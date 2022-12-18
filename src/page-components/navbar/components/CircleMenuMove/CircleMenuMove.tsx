import cn from "classnames";

import CircleMenuMoveProps from "./CircleMenuMove.props";
import styles from "./CircleMenuMove.module.scss";

export const CircleMenuMove = ({
  menuOff,
  activeMenu,
  top,
  className,
  ...props
}: CircleMenuMoveProps): JSX.Element => {
  return (
    <div
      className={cn(className, styles.checkMenuWrapper, {
        [styles.checkMenuOn]: activeMenu,
        [styles.checkMenuOff]: menuOff,
      })}
      style={{ top: 82 + 48 * top + top * 1.5 }}
      {...props}
    >
      <div className={styles.wrapperCircle}>
        <span className={cn(styles.checkMenu)}></span>
        <span
          className={cn(styles.checkMenuTop, {
            [styles.checkMenuTopOn]: activeMenu,
          })}
        ></span>
        <span
          className={cn(styles.checkMenuMain, {
            [styles.checkMenuMainOn]: activeMenu,
          })}
        ></span>
        <span
          className={cn(styles.checkMenuBottom, {
            [styles.checkMenuBottomOn]: activeMenu,
          })}
        ></span>
      </div>
    </div>
  );
};
