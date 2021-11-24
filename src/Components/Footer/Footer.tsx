import logo from "../../images/WhiteCatWikiLogo.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="catWikiLogo" />
      <p>
        <span className={styles.copyright}>©</span>created by{" "}
        <span className={styles.username}>username</span> - devChallenge.io 2021
      </p>
    </div>
  );
};

export default Footer;
