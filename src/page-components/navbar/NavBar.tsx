import { useState } from "react";
import {
  Diversity1 as Logo,
  NightsStay as Dark,
  LightMode as Light,
} from "@mui/icons-material";
import cn from "classnames";
import { useLocation } from "react-router-dom";

import { IUser } from "utils/interface";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { getMenuList, getTheme, getUser } from "store/select";

import { CardNavBar, CardNavTheme, CircleMenuMove } from "./components";
import NavBarProps from "./NavBar.props";
import styles from "./NavBar.module.scss";
import { actionChangeTheme } from "store/slice";

export function NavBar({ className, ...props }: NavBarProps): JSX.Element {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const user: IUser | undefined = useAppSelector(getUser);
  const menuList = useAppSelector(getMenuList);
  const theme: boolean = useAppSelector(getTheme);

  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);

  const menuOff: boolean =
    menuList.find((menu) => menu.to === pathname) === undefined;

  const handleChangeTheme = (): void => {
    dispatch(actionChangeTheme(!theme));
  };

  const filterMenuList = (menu: any): boolean => {
    if (user === undefined) {
      if (menu.to === "/profile") {
        return false;
      } else {
        return true;
      }
    }
    if (user !== undefined) {
      if (menu.to === "/auth") {
        return false;
      } else {
        return true;
      }
    }
    return true;
  };

  return (
    <div
      className={cn(styles.wrapperNavBar, {
        [styles.wrapperNavBarOn]: activeMenu,
      })}
      onMouseEnter={() => setActiveMenu(true)}
      onMouseLeave={() => setActiveMenu(false)}
      {...props}
    >
      <span className={styles.titleWrapper}>
        <Logo />
        <h1
          className={cn(styles.titleNavBar, {
            [styles.titleNavBarOn]: activeMenu,
          })}
        >
          SpectruMine
        </h1>
      </span>
      <CircleMenuMove top={top} activeMenu={activeMenu} menuOff={menuOff} />
      {menuList
        .filter((menu) => filterMenuList(menu))
        .map((menu, index) => {
          return (
            <CardNavBar
              key={index}
              text={menu.text}
              to={menu.to}
              index={index}
              icon={<menu.icon />}
              selected={pathname === menu.to}
              activeMenu={activeMenu}
              setTop={setTop}
            />
          );
        })}
      <CardNavTheme
        icon={theme ? <Dark /> : <Light />}
        text={"Тема"}
        activeMenu={activeMenu}
        theme={theme}
        onClick={handleChangeTheme}
      />
    </div>
  );
}
