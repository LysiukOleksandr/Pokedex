import React from "react";
import PokemonList from "../components/PokemonList/PokemonList";
import Filter from "../components/Filter/Filter";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import store from "../store/store";
import { observer } from "mobx-react-lite";
const Home = observer(() => {
  const totalPages = Math.ceil(store.countOfPokemons / store.limitOnPage);

  React.useEffect(() => {
    store.fetchPokemons();
    store.fetchPokemonsTypes();
    store.resetData();
  }, []);

  function handlePageChange(pageNumber) {
    store.changeCurrentPage(pageNumber);
  }

  return (
    <div>
      <Filter />
      <PokemonList pokemons={store.pokemons} />
      <div className="pagination">
        <Pagination
          currentPage={store.currentPage}
          totalPages={totalPages}
          changeCurrentPage={handlePageChange}
          theme="bottom-border"
        />
      </div>
    </div>
  );
});

export default Home;
