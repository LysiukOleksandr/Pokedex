import React from 'react'
import PokemonList from '../components/PokemonList/PokemonList'
import Filter from '../components/Filter/Filter'
import store from '../store/store'
import {observer} from 'mobx-react-lite'
const Home = observer(() =>{

  React.useEffect(()=>{
    store.fetchPokemons()
  },[])

  return(
    <div>
      <Filter />
      <PokemonList/>
    </div>
  )
})


export default Home;