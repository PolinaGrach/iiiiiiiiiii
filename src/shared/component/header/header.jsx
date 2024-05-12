import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/logo-icon.svg";
import MerchIcon from "../../../assets/merch-icon.svg";
import {useEffect, useState} from "react";
import {MobileMenu} from "../../mobile-menu/mobile-menu.jsx";
import styles from "./header.module.css";

export const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };

    const body = document.querySelector('body');

    if (menuIsActive) {
      body.classList.add('lock')
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      body.classList.remove('lock');
    };


  }, [menuIsActive]);

  const handleMenuToggle = () => {
    setMenuIsActive(!menuIsActive);
  };

  return (
    <header className={styles.header}>
      {width >= 901 ? (
          <nav className={styles.headerNav}>
            <Link to="/">
              <img src={LogoIcon} alt="Иконка логотипа"/>
            </Link>
            <Link to="/registration" className={styles.headerNavButton}>
              Вход
            </Link>
            <Link to={'/characters'} className={styles.headerNavButton}>Персонажи</Link>
            <Link to="/story" className={styles.headerNavButton}>
              Сюжет
            </Link>
            <Link to={'/about'} className={styles.headerNavButton}>О нас</Link>
            <Link to={'/merch'} className={styles.headerNavButton}>Мерч</Link>
            <img className={styles.headerImg} src={MerchIcon} alt="Иконка логотипа аниме"/>
          </nav>
      ): (
          <>
            <Link to="/">
              <img src={LogoIcon} alt="Иконка логотипа"/>
            </Link>
            <button
                onClick={handleMenuToggle}
                className={menuIsActive ? styles.headerBtnBurger + " " + styles.open : styles.headerBtnBurger}
            >
              <span/>
            </button>
          </>
      )}
      <MobileMenu isOpen={menuIsActive} onClose={handleMenuToggle}/>
    </header>
  );
};
