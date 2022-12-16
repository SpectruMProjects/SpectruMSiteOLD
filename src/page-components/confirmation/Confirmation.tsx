import { CardPage } from "components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getUser } from "store/select";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { IUser } from "utils/interface";
import { fetchConfirmationAccount } from "page-components/auth";

import styles from "./Confirmation.module.scss";
import { LoadingIcon } from "assets/svg";

export const Confirmation = (): JSX.Element => {
  const { code } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user: IUser | undefined = useAppSelector(getUser);

  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    if (user === undefined) {
      if (code) dispatch(fetchConfirmationAccount(code));
    }
    if (user !== undefined) {
      setLoad(false);
      setTimeout(() => {
        navigate("/profile");
      }, 5000);
    }
  }, [navigate, user]);

  return (
    <CardPage>
      <div className={styles.wrapperConfirmation}>
        {load ? (
          <div className={styles.loadWrapper}>
            <LoadingIcon className={styles.loadicon} />
            <p>Ожидание подтверждения...</p>
          </div>
        ) : (
          user && <p>Добро пожаловать, {user.username}</p>
        )}
      </div>
    </CardPage>
  );
};
