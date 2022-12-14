import { Diversity1 as Logo } from "@mui/icons-material";
import cn from "classnames";
import { useLocation } from "react-router-dom";

import { IUser } from "utils/interface";
import { useAppSelector } from "utils/hooks";
import { getMenuList, getUser } from "store/select";

import { CardNavBar } from "./components";
import NavBarProps from "./NavBar.props";
import styles from "./NavBar.module.scss";
import { useState } from "react";
import { style } from "@mui/system";

export function NavBar({ className, ...props }: NavBarProps): JSX.Element {
  const { pathname } = useLocation();

  const user: IUser | undefined = useAppSelector(getUser);
  const menuList = useAppSelector(getMenuList);

  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [top, setTop] = useState<number | undefined>(82);
  const [numberTop, setNumberTop] = useState<number>(0);

  return (
    <div
      className={cn(styles.wrapperNavBar, {
        [styles.wrapperNavBarOn]: activeMenu,
      })}
      onMouseEnter={(e) => {
        setActiveMenu(true);
      }}
      onMouseLeave={(e) => {
        setActiveMenu(false);
      }}
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
      <span
        className={cn(styles.checkMenuWrapper, {
          [styles.checkMenuOn]: activeMenu,
        })}
        style={{ top: 82 + 48 * numberTop + numberTop * 1.5 }}
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
      </span>
      {menuList.map((menu, index) => (
        <CardNavBar
          key={index}
          text={menu.text}
          to={menu.to}
          index={index}
          setNumberTop={setNumberTop}
          icon={<menu.icon />}
          selected={pathname === menu.to}
          activeMenu={activeMenu}
          setTop={setTop}
        />
      ))}
    </div>
  );
}
