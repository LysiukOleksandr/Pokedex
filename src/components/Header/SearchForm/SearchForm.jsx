import React from "react";
import "./SearchForm.css";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
const SearchForm = observer(() => {
  function onChangeSearchValue(e) {
    let value = e.target.value.replace(/\s+/g, "");
    store.changeCurrentPage(1);
    store.searchPokemons(value);
  }

  return (
    <form className="header__form">
      <input
        type="text"
        className="header__search"
        onChange={onChangeSearchValue}
      />
    </form>
  );
});

export default SearchForm;
