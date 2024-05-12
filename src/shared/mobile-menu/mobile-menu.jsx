import { Link } from "react-router-dom";
import styles from "./mobile-menu.module.css";

export const MobileMenu = ({ isOpen, onClose }) => {
    const menuClass = isOpen ? `${styles.mobileMenu} ${styles.open}` : styles.mobileMenu;

    return (
        <nav className={menuClass}>
            <Link to={'/'} className={styles.mobileMenuLink} onClick={onClose}>
                На главную
            </Link>
            <Link to="/registration" className={styles.mobileMenuLink} onClick={onClose}>
                Вход
            </Link>
            <Link to={'/characters'} className={styles.mobileMenuLink} onClick={onClose}>Персонажи</Link>
            <Link to="/story" className={styles.mobileMenuLink} onClick={onClose}>
                Сюжет
            </Link>
            <Link to={'/about'} className={styles.mobileMenuLink} onClick={onClose}>О нас</Link>
            <Link to={'/merch'} className={styles.mobileMenuLink} onClick={onClose}>Мерч</Link>
        </nav>
    );
};
