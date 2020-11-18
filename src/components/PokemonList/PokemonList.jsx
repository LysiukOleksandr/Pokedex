import React from 'react';
import './PokemonList.css'
import PokemonCard from '../PokemonCard/PokemonCard'
function PokemonList(){
  return(
    <div className='list'>
      <PokemonCard/>
    </div>
  )
}


export default PokemonList