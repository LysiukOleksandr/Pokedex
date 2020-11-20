import React from 'react';
import './PokemonCard.css'
import axios from 'axios'
import { observer } from 'mobx-react-lite'
const PokemonCard = observer(({ pokemonName }) =>{

 const [pokemon, setPokemon] = React.useState(null)

 const colors = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  fighting: '931625',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
}


  React.useEffect(() =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(({ data }) =>{
      setPokemon({
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types
      })
    })
    .catch((error) => {
      console.log(error)
    })
  },[pokemonName])


 

  return(
    <div className='card'>
      <div className="card__img">
        <img src={pokemon && pokemon.sprite } alt={pokemon && pokemon.name }/>
        </div>
        <p className='card__id'>{pokemon && pokemon.id }</p>
        <p className="card__name"> {pokemon && pokemon.name } </p>
        <ul className='card__types'>
          {
            pokemon && 
            pokemon.types.map((item) =>{
              return <li key={item.type.name} className="card__type" style={{ backgroundColor: `#${colors[item.type.name]}` }}>{item.type.name }</li>
            })
          }
        </ul>
          
    </div>
  )
})

export default PokemonCard