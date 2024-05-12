import { Outlet } from "react-router-dom";
import styles from "./main.module.css";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
};
