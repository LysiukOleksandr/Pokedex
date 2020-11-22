import React from 'react'
import PokemonList from '../components/PokemonList/PokemonList'
import Filter from '../components/Filter/Filter'
import Pagination from '../components/Pagination/Pagination'
import store from '../store/store'
import {observer} from 'mobx-react-lite'

const Home = observer(() =>{
  const pokemons = store.pokemons
  React.useEffect(()=>{
    if(store.pokemons.length < 1){
      store.fetchPokemons()
    }

    return () => console.log('unmount')
  },[])
  

  return(
    <div>
      <Filter />
      <PokemonList pokemons={pokemons}/>
      <Pagination />
    </div>
  )
})


export default Home;