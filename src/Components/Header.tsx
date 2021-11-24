import styles from "./Header.module.css";
import catLogo from "../images/CatwikiLogo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={catLogo} alt="cat logo" />
    </header>
  );
};

export default Header;
