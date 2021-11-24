import TopSection from "./TopSection/TopSection";
import BottomSection from "./BottomSection/BottomSection";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <TopSection />
      <BottomSection />
    </section>
  );
};

export default HeroSection;
