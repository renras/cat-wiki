import { useAppSelector } from "../../../../store/hooks";

import styles from "./TopSection.module.css";
import SearchBar from "./SearchBar/SearchBar";
import SearchMobile from "./SearchBar/SearchMobile";
import logo from "../../../../images/WhiteCatWikiLogo.svg";

const TopSection = () => {
  const textInput = useAppSelector((state) => state.searchBar.textInput);

  return (
    <div className={styles.top_section}>
      <h1>CatWiki</h1>
      <img className={styles.logo} src={logo} alt="cat_logo" />
      <p>Get to know more about your cat breed</p>
      <SearchBar width="" padding="" border="" fontSize="" />
      {textInput.length > 0 && <SearchMobile />}
    </div>
  );
};

export default TopSection;
