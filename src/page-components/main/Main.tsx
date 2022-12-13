import { Outlet } from "react-router-dom";
import { NavBar } from "page-components/navbar";

import styles from "./Main.module.scss";

export const Main = (): JSX.Element => {
  return (
    <main className={styles.mainWrapper}>
      <NavBar />
      <Outlet />
    </main>
  );
};
