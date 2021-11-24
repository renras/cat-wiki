import styles from "./RandomCats.module.css";
import useRandomCats from "./RandomCatsLogic";
import { Link } from "react-router-dom";

const RandomCats = ({ length }: { length: number }) => {
  const { cats, getRandomNumbers } = useRandomCats();

  const randomNumbers: number[] = getRandomNumbers(length);

  return (
    <div className={styles.random_cats_cards}>
      {randomNumbers.map((number, index) => {
        return (
          <Link className={styles.link} to={`/${cats[number].name}`}>
            <div className={styles.random_cats_card} key={index}>
              <div
                style={{ backgroundImage: `url("${cats[number].image.url}")` }}
                className={styles.image}
              ></div>
              <p>{cats[number].name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RandomCats;

/* <img src={cats[number].image.url} alt="cat" /> */
//to={`/${cat.name}`}
