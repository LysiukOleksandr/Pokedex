import React from "react";
import "./PokemonList.css";
import PokemonCard from "../PokemonCard/PokemonCard";
import { observer } from "mobx-react-lite";

const PokemonList = React.memo(
  observer(({ pokemons }) => {
    return (
      <div className="list">
        {pokemons &&
          pokemons.map((pokemon) => {
            return (
              <PokemonCard id={pokemon.url.slice(34, -1)} key={pokemon.name} />
            );
          })}
      </div>
    );
  })
);

export default PokemonList;
