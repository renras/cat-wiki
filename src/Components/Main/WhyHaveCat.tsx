import image1 from "../../images/image 1.png";
import image2 from "../../images/image 2.png";
import image3 from "../../images/image 3.png";

import styles from "./WhyHaveCat.module.css";

const WhyHaveCat = () => {
  return (
    <section className={styles.why_have_cat}>
      <div className={styles.header}>
        <div className={styles.underline}></div>
        <h2>Why should you have a cat?</h2>
      </div>
      <p>
        Having a cat around you can actually trigger the release of calming
        chemicals in your body which lower your stress and anxiety levels
      </p>
      <div className={styles.cat_images}>
        <img className={styles.image1} src={image1} alt="cat being carried" />
        <img className={styles.image2} src={image2} alt="cat lying on owner" />
        <img className={styles.image3} src={image3} alt="cat inside a bag" />
      </div>
    </section>
  );
};

export default WhyHaveCat;
