import { useRef, useLayoutEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../../store/hooks";
import { searchBarActions } from "../../../../../store/searchBarSlice";

import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  width,
  padding,
  border,
  fontSize,
}: {
  width: string;
  padding: string;
  border: string;
  fontSize: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textInput: string = useAppSelector(
    (state) => state.searchBar.textInput
  );
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchBarActions.changeText(e.target.value));
  };

  useLayoutEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  });

  return (
    <div
      style={{ padding: `${padding}`, width: `${width}`, border: `${border}` }}
      className={styles.search_bar}
    >
      <input
        style={{ fontSize: `${fontSize}` }}
        ref={inputRef}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search"
        value={textInput}
      />
      <FaSearch className={styles.search_icon} />
    </div>
  );
};

export default SearchBar;
