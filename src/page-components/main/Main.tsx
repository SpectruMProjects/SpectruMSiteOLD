import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { NavBar } from "page-components/navbar";

import styles from "./Main.module.scss";
import { useEffect } from "react";
import { useAppSelector } from "utils/hooks";
import { getTheme } from "store/select";

export const Main = (): JSX.Element => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const theme: boolean = useAppSelector(getTheme);

  //keeps track of the theme of the system
  useEffect(() => {
    document.body.dataset.theme = theme ? "dark" : "light";
  }, [theme]);

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
