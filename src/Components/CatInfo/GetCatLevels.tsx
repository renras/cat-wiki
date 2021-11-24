import ProgressBar from "./ProgressBar";

import styles from "./GetCatLevels.module.css";

const GetCatLevels = ({ cat }: { cat: any }) => {
  const catLevels = [
    "Life Span",
    "Adaptability",
    "Affection level",
    "Child friendly",
    "Grooming",
    "Intelligence",
    "Health Issues",
    "Social needs",
    "Stranger friendly",
  ];

  const levels = [
    cat.life_span,
    cat.adaptability,
    cat.affection_level,
    cat.child_friendly,
    cat.grooming,
    cat.intelligence,
    cat.health_issues,
    cat.socia_needs,
    cat.stranger_friendly,
  ];

  return (
    <>
      {catLevels.map((characteristic, index) => {
        return (
          <div className={styles.level}>
            <p>
              <b>{characteristic}:</b>
            </p>
            <ProgressBar number={levels[index]} />
          </div>
        );
      })}
    </>
  );
};

export default GetCatLevels;

// <p><b>Origin:</b> {cat.origin}</p>
