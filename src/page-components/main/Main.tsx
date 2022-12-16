import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { NavBar } from "page-components/navbar";

import styles from "./Main.module.scss";
import { useTheme } from "utils/context";
import { useEffect } from "react";

export const Main = (): JSX.Element => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const themeChange = useTheme();

  //keeps track of the theme of the system
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      themeChange?.changeTheme("dark");
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      themeChange?.changeTheme("light");
    }
  }, [themeChange]);

  return (
    <main className={styles.mainWrapper}>
      <NavBar />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames='page'
          unmountOnExit
        >
          <div className='page'>{currentOutlet}</div>
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
};
