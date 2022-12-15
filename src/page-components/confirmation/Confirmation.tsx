import { CardPage } from "components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUser } from "store/select";
import { useAppSelector } from "utils/hooks";
import { IUser } from "utils/interface";

import styles from "./Confirmation.module.scss";

export const Confirmation = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user: IUser | undefined = useAppSelector(getUser);

  useEffect(() => {
    if (user === undefined) {
    }
    if (user !== undefined) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <CardPage>
      <div></div>
    </CardPage>
  );
};
