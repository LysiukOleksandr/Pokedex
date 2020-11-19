import React from 'react';
import './PokemonList.css'
import PokemonCard from '../PokemonCard/PokemonCard'
import { observer } from 'mobx-react-lite'
import store from '../../store/store'
const PokemonList = observer(() =>{
  return(
    <div className='list'>
      {
        store.pokemons && 
        store.pokemons.map((pokemon) =>{
          return <PokemonCard pokemonName={pokemon} key={pokemon} />
        })
      }
    </div>
  )
})


export default PokemonList