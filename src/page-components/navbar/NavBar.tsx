import {
  Home,
  SupervisedUserCircle as Auth,
  Launch,
  VerifiedUser as Profile,
  ShoppingCart,
} from "@mui/icons-material";
import cn from "classnames";
import { useLocation } from "react-router-dom";

import { IUser } from "utils/interface";
import { useAppSelector } from "utils/hooks";
import { getUser } from "store/select";

import { CardNavBar } from "./components";
import NavBarProps from "./NavBar.props";
import styles from "./NavBar.module.scss";

export function NavBar({ className, ...props }: NavBarProps): JSX.Element {
  const { pathname } = useLocation();

  const user: IUser | undefined = useAppSelector(getUser);

  return (
    <div className={cn(styles.wrapperNavBar)} {...props}>
      <h1 className={styles.titleNavBar}>SpectruMine</h1>
      <CardNavBar
        text={"Главная"}
        to={"/"}
        icon={<Home />}
        selected={pathname === "/"}
      />
      <CardNavBar
        text={"Лаунчер"}
        to={"/launcher"}
        icon={<Launch />}
        selected={pathname === "/launcher"}
      />
      <CardNavBar
        text={"Пропуск"}
        to={"/pass"}
        icon={<ShoppingCart />}
        selected={pathname === "/pass"}
      />
      {user ? (
        <CardNavBar
          text={"Профиль"}
          to={"/profile"}
          icon={<Profile />}
          selected={pathname === "/profile"}
        />
      ) : (
        <CardNavBar
          text={"Авторизация"}
          to={"/auth"}
          icon={<Auth />}
          selected={pathname === "/auth"}
        />
      )}
    </div>
  );
}
