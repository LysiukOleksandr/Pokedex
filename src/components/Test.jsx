import React from "react";
import { observer } from "mobx-react-lite";
import store from "../store/store";

const Test = observer(() => {
  React.useEffect(() => {
    store.fetchPokemonsByFilter(["fire", "rock"]);
    console.log(store.filterPokemons);
  }, []);

  return (
    <div>
      <ul>
        {store.filterPokemons &&
          store.filterPokemons.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
    </div>
  );
});

export default Test;
