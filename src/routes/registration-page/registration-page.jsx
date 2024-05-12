import LoginImg from "../../assets/login-img.svg";
import styles from "./registration-page.module.css";

export const RegistrationPage = () => {
  return (
    <div className={styles.registration}>
      <h1 className={styles.registrationTitle}>Регистрация</h1>
      <form className={styles.registrationForm}>
        <div className={styles.registrationInner}>
          <div className={styles.registrationItem}>
            <input
              className={styles.registrationInput}
              type="mail"
              placeholder="E-mail"
            />
            <input
              className={styles.registrationInput}
              type="text"
              placeholder="Имя пользователя"
            />
            <input
              className={styles.registrationInput}
              type="password"
              placeholder="Пароль"
            />
            <input
              className={styles.registrationInput}
              type="password"
              placeholder="Повторите пароль"
            />
            <div className={styles.registrationBtns}>
              <button className={styles.registrationBtn}>Вход</button>
              <button className={styles.registrationBtn}>Регистрация</button>
            </div>
          </div>
          <div className={styles.registrationItem}>
            <img
              className={styles.registrationImg}
              src={LoginImg}
              alt="Картинка логина"
            />
            <p className={styles.registrationText}>Добро пожаловать!</p>
          </div>
        </div>
      </form>
    </div>
  );
};
