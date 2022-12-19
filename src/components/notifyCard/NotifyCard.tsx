import cn from "classnames";
import { Close } from "@mui/icons-material";

import { useAppDispatch } from "utils/hooks";

import NotifyCardProps from "./NotifyCard.props";
import styles from "./NotifyCard.module.scss";

export const NotifyCard = ({
  icon,
  text,
  color,
  remove,
  action,
  className,
  ...props
}: NotifyCardProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleRemove = (): void => {
    if (remove) {
      if (remove.id) {
        dispatch(remove.action(remove.id));
      } else {
        dispatch(remove.action());
      }
    }
  };

  return (
    <div
      style={{ background: `var(--${color})` }}
      className={cn(className, styles.wrapperNotification)}
      {...props}
    >
      <div className={styles.wrapperUpNotification}>
        <div className={styles.notificationIcon}>{icon}</div>
        <p className={styles.text}>{text}</p>
        {remove && (
          <button
            className={styles.buttonWrapperCancel}
            onClick={() => handleRemove()}
            tabIndex={0}
          >
            <Close className={styles.cancelIcon} />
          </button>
        )}
      </div>
      {action && (
        <div className={styles.wrapperActionButton}>
          <button
            className={styles.actionButton}
            onClick={(e) => action.func(e)}
            tabIndex={0}
          >
            {action.text}
          </button>
        </div>
      )}
    </div>
  );
};
