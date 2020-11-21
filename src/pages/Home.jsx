import React from 'react'
import PokemonList from '../components/PokemonList/PokemonList'
import Filter from '../components/Filter/Filter'
import Pagination from '../components/Pagination/Pagination'
import store from '../store/store'
import {observer} from 'mobx-react-lite'
const Home = observer(() =>{
  

  React.useEffect(()=>{
    if(store.pokemons.length < 1 ){
      store.fetchPokemons()
    }
  },[])

  return(
    <div>
      <Filter />
      <PokemonList/>
      <Pagination />
    </div>
  )
})


export default Home;