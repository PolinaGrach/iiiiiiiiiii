import { Header } from "../../shared/component/header/header.jsx";
import { Footer } from "../../shared/component/footer/footer.jsx";
import { Main } from "../../shared/component/main/main.jsx";
import styles from "./app-layout.module.css";

export const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
