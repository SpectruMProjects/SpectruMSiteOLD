import { CardPage } from "components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "utils/hooks";
import { IUser } from "utils/interface";
import { fetchConfirmationAccount } from "page-components/auth";
import { LoadingIcon } from "assets/svg";
import { getUser } from "store/select";

import styles from "./Confirmation.module.scss";

export const Confirmation = (): JSX.Element => {
  const { pathname } = useLocation();
  const { code } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user: IUser | undefined = useAppSelector(getUser);

  const [load, setLoad] = useState<boolean>(true);
  const [close, setClose] = useState<boolean>(false);

  useEffect(() => {
    if (user === undefined) {
      if (code) dispatch(fetchConfirmationAccount(code));
    }
    if (user !== undefined) {
      setLoad(false);

      setTimeout(() => {
        setClose(true);
      }, 4800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, pathname, user]);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        if (window.location.pathname === pathname) navigate("/profile");
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <CardPage className={styles.wrapperConf}>
      <div className={styles.wrapperConfirmation}>
        {load ? (
          <div
            className={cn(styles.loadWrapper, {
              [styles.loadWrapperOn]: load,
            })}
          >
            <LoadingIcon className={styles.loadicon} />
            <p>Ожидание подтверждения...</p>
          </div>
        ) : (
          user && (
            <div
              className={cn(styles.loadWrapperAccess, {
                [styles.loadWrapperAccessOn]: !load,
                [styles.loadWrapperAccessOff]: close,
              })}
            >
              <p className={styles.textName}>
                Добро пожаловать, <p>{user.username}</p>!
              </p>
              <p className={styles.textBottom}>
                Через несколько секунд вы будете перемещены на страницу
                профиля...
              </p>
            </div>
          )
        )}
      </div>
    </CardPage>
  );
};
