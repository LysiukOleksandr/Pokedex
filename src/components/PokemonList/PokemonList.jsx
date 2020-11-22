import React from 'react';
import './PokemonList.css'
import PokemonCard from '../PokemonCard/PokemonCard'
import { observer } from 'mobx-react-lite'
const PokemonList = observer(({ pokemons }) =>{

  
  return(
    <div className='list'>
      {
        pokemons && 
        pokemons.map((pokemon) =>{
          return <PokemonCard pokemonName={pokemon} key={pokemon} />
        })
      }
    </div>
  )
})


export default PokemonList