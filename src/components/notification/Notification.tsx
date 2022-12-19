import cn from "classnames";
import {
  QuestionMark,
  PublicOff,
  ContentCopy,
  Info,
} from "@mui/icons-material";

import { useAppSelector } from "utils/hooks";
import {
  getAction,
  getCopy,
  getErrors,
  getFetch,
  getLoading,
} from "store/select";
import { IAction, IError } from "utils/interface";
import { actionDeleteAction, actionDeleteError } from "store/slice";
import { LoadingIcon } from "assets/svg";
import { NotifyCard } from "components";

import NotificationProps from "./Notification.props";
import styles from "./Notification.module.scss";

export const Notification = ({
  className,
  ...props
}: NotificationProps): JSX.Element => {
  const errors: IError[] = useAppSelector(getErrors);
  const action: IAction[] = useAppSelector(getAction);
  const loading: boolean = useAppSelector(getLoading);
  const copy: boolean = useAppSelector(getCopy);
  const fetch: boolean = useAppSelector(getFetch);

  return (
    <section className={cn(className, styles.notificationWrapper)} {...props}>
      {action !== null &&
        action.map(({ id, text, action }) => (
          <NotifyCard
            key={id}
            icon={<QuestionMark />}
            text={text}
            color={"mauve"}
            remove={{ id, action: actionDeleteAction }}
            action={
              action && {
                func: action?.func,
                text: action?.text,
              }
            }
          />
        ))}
      {errors !== null &&
        errors.map((error) => (
          <NotifyCard
            key={error?.id}
            icon={<Info />}
            text={error.text}
            color={"danger"}
            remove={{ id: error.id, action: actionDeleteError }}
          />
        ))}
      {copy && (
        <NotifyCard
          icon={<ContentCopy />}
          text={"Строка скопирована"}
          color={"success"}
        />
      )}
      {loading && (
        <NotifyCard
          icon={<LoadingIcon />}
          text={"Загрузка данных..."}
          color={"secondary"}
        />
      )}
      {fetch && (
        <NotifyCard
          icon={<PublicOff />}
          text={"Нету подключения к серверу..."}
          color={"warning"}
        />
      )}
    </section>
  );
};
