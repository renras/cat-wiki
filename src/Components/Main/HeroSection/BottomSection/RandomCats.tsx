import styles from "./RandomCats.module.css";
import useRandomCats from "./RandomCatsLogic";
import { Link } from "react-router-dom";

function generateRandomNumbers(maxNumber: number, numRandomNumbers: number) {
  let randomNumbers = [];
  for (let i = 0; i < numRandomNumbers; i++) {
    randomNumbers.push(Math.floor(Math.random() * maxNumber));
  }
  return randomNumbers;
}

const RandomCats = ({ length }: { length: number }) => {
  const { cats } = useRandomCats();

  const randomNumbers = generateRandomNumbers(cats.length, length);

  if (!cats.length) {
    return <> </>;
  }

  return (
    <div className={styles.random_cats_cards}>
      {randomNumbers.map((number, index) => {
        return (
          <Link className={styles.link} to={`/${cats[number].name}`}>
            <div className={styles.random_cats_card} key={index}>
              <div
                style={{
                  backgroundImage: `url("https://cdn2.thecatapi.com/images/${cats[number].reference_image_id}.jpg")`,
                }}
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
