import RandomCats from "./RandomCats";
import styles from "./BottomSection.module.css";

const BottomSection = () => {
  return (
    <div className={styles.bottom_section}>
      <h2>66+ Breeds For you to discover</h2>
      <RandomCats length={4} />
    </div>
  );
};

export default BottomSection;
