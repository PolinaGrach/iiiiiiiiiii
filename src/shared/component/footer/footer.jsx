import VkIcon from "../../../assets/vk.png";
import TwIcon from "../../../assets/tw.png";
import InstIcon from "../../../assets/inst.png";
import TelVk from "../../../assets/tel.png";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerContacts}>
          <h3 className={styles.footerContactsTitle}>Контакты</h3>
          <a href="tel:+7952812" className={styles.footerContactsPhone}>
            +7(952)812
          </a>
          <a
            href="mailto:onepiecefan@gmail.com"
            className={styles.footerContactsEmail}
          >
            onepiecefan@gmail.com
          </a>
        </div>
        <h3 className={styles.footerSubscribeTitle}>Подписывайся на нас!</h3>
        <div className={styles.footerSocial}>
          <a href="#" target="_blank">
            <img
              className={styles.footerIcon}
              src={VkIcon}
              alt="Иконка вконтакте"
            />
          </a>
          <a href="#" target="_blank">
            <img
              className={styles.footerIcon}
              src={TwIcon}
              alt="Иконка твиттера"
            />
          </a>
          <a href="#" target="_blank">
            <img
              className={styles.footerIcon}
              src={InstIcon}
              alt="Иконка инстаграм"
            />
          </a>
          <a href="#" target="_blank">
            <img
              className={styles.footerIcon}
              src={TelVk}
              alt="Иконка линкедин"
            />
          </a>
          {/* <a href="#" target="_blank">
            <img className={styles.footerIcon} src="" alt="Иконка ютуба" />
          </a>
          <a href="#" target="_blank">
            <img className={styles.footerIcon} src="" alt="Иконка гугл почты" />
          </a> */}
        </div>
      </div>
      <p className={styles.footerCopyright}>ONE PIECE FAN 2024</p>
    </footer>
  );
};
