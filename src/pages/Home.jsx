import React from 'react'
import PokemonList from '../components/PokemonList/PokemonList'
import Filter from '../components/Filter/Filter'
function Home(){
  return(
    <div>
      <Filter />
      <PokemonList/>
    </div>
  )
}


export default Home;