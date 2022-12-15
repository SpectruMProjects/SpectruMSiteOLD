import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { NavBar } from "page-components/navbar";

import styles from "./Main.module.scss";

export const Main = (): JSX.Element => {
  const location = useLocation();
  const currentOutlet = useOutlet();

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
