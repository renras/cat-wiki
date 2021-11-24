import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import styles from "./CatInfo.module.css";
import GetCatLevels from "./GetCatLevels";
import RandomCats from "../Main/HeroSection/BottomSection/RandomCats";
import { BsArrowLeft } from "react-icons/bs";

const CatInfo = () => {
  const catInfo: string | undefined = useParams().catName;
  const cats: any[] = useAppSelector((state) => state.app.cats);
  const cat: any = cats.find((cat) => cat.name === catInfo);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className={styles.cat_info}>
      <div className={styles.header}>
        <div className={styles.top_section}>
          <Link className={styles.link} to="/">
            <BsArrowLeft className={styles.left_icon} />
            Go Back
          </Link>
          <div className={styles.image_container}>
            <div
              style={{ backgroundImage: `url("${cat.image.url}")` }}
              className={styles.main_image}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.info_section}>
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
        <p>
          <b>Temperament:</b> {cat.temperament}
        </p>
        <p>
          <b>Origin:</b> {cat.origin}
        </p>
        <div className={styles.levels_section}>
          <GetCatLevels cat={cat} />
        </div>
      </div>
      <div className={styles.other_photos}>
        <h3>Other Photos</h3>
        <RandomCats length={8} />
      </div>
    </section>
  );
};

export default CatInfo;
