import { useAppSelector, useAppDispatch } from "../../../../../store/hooks";
import { Link } from "react-router-dom";

import styles from "./SearchMobile.module.css";
import SearchBar from "./SearchBar";
import { GrFormClose } from "react-icons/gr";
import { searchBarActions } from "../../../../../store/searchBarSlice";

const SearchMobile = () => {
  const dispatch = useAppDispatch();
  const cats: any[] = useAppSelector((state) => state.app.cats);
  const textInput: string = useAppSelector(
    (state) => state.searchBar.textInput
  );

  let newCats = cats.filter((cat) =>
    cat.name.toLowerCase().includes(textInput.toLowerCase())
  );

  const handleClick = () => {
    dispatch(searchBarActions.showSearchBar());
  };

  return (
    <div className={styles.search_mobile}>
      <button onClick={handleClick} className={styles.icon_container}>
        <GrFormClose className={styles.close_icon} />
      </button>
      <SearchBar
        width="100%"
        padding="1.1rem 2rem"
        border=".1rem solid #000000"
        fontSize="1.8rem"
      />
      <ul className={styles.search_list}>
        {newCats.map((cat, index) => (
          <Link
            onClick={handleClick}
            className={styles.link}
            key={index}
            to={`/${cat.name}`}
          >
            <li>{cat.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchMobile;
