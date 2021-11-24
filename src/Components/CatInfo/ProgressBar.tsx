import styles from "./ProgressBar.styles.module.css";

const ProgressBar = ({ number }: { number: number }) => {
  let brownBar = new Array(number).fill("brown");
  let yellowBar = [];
  if (brownBar.length < 5) {
    let newNumber = 5 - brownBar.length;
    yellowBar = new Array(newNumber).fill("white");
  }
  let progressBar = brownBar.concat(yellowBar);

  return (
    <div className={styles.bars}>
      {progressBar.map((bar, index) => {
        if (bar === "brown") {
          return (
            <div className={`${styles.bar} ${styles.brown}`} key={index}></div>
          );
        }
        return (
          <div className={`${styles.bar} ${styles.white}`} key={index}></div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
