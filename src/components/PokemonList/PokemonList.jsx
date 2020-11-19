import React from 'react';
import './PokemonList.css'
import PokemonCard from '../PokemonCard/PokemonCard'
import { observer } from 'mobx-react-lite'
import store from '../../store/store'
const PokemonList = observer(() =>{
  return(
    <div className='list'>
      {
        store.pokemons.results && 
        store.pokemons.results.map((pokemon) =>{
          return <PokemonCard pokemon={pokemon} key={pokemon.name} />
        })
      }
    </div>
  )
})


export default PokemonList