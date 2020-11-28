import React from "react";
import "./PokemonCard.css";
import { observer } from "mobx-react-lite";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import axios from "axios";
const PokemonCard = observer(({ id }) => {
  const [pokemon, setPokemon] = React.useState(null);

  const colors = {
    bug: "B1C12E",
    dark: "4F3A2D",
    dragon: "755EDF",
    electric: "FCBC17",
    fairy: "F4B1F4",
    fighting: "82351D",
    fire: "E73B0C",
    flying: "A3B3F7",
    ghost: "6060B2",
    grass: "74C236",
    ground: "D3B357",
    ice: "A3E7FD",
    normal: "C8C4BC",
    poison: "934594",
    psychic: "ED4882",
    rock: "B9A156",
    steel: "B5B5C3",
    water: "3295F6",
  };

  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cancelToken: source.token,
      })
      .then(({ data }) => {
        setPokemon({
          id: data.id,
          name: data.name,
          types: data.types,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    return () => source.cancel();
  }, [id]);

  return (
    <div className="card">
      <Link to={`/${id}`}>
        <Img
          className="card__img"
          key={id}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={`poke-${id}`}
          loader={
            <img
              src="https://gifimage.net/wp-content/uploads/2018/05/spinner-gif-transparent-background-2.gif"
              style={{ width: 100, height: 100 }}
              alt=""
            />
          }
          unloader={
            <img
              src="https://www.nocowboys.co.nz/images/v3/no-image-available.png"
              style={{ width: 100, height: 100 }}
              alt=""
            />
          }
        />
      </Link>
      <p className="card__id">{pokemon && pokemon.id}</p>
      <p className="card__name"> {pokemon && pokemon.name} </p>
      <ul className="card__types">
        {pokemon &&
          pokemon.types.map((item) => {
            return (
              <li
                key={item.type.name}
                className="card__type"
                style={{ backgroundColor: `#${colors[item.type.name]}` }}
              >
                {item.type.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default PokemonCard;
