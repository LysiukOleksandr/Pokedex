import React from 'react';
import './SearchForm.css'
import { observer } from 'mobx-react-lite'
import store from '../../../store/store'
const SearchForm = observer(() =>{



   function onChangeSearchValue(e){
    store.setSearchValue(e.target.value)
    store.fetchPokemons()
  }



  return(
      <form  className="header__form">
       <input type="text" className="header__search" onChange={onChangeSearchValue} />
        </form> 
  )
})


export default SearchForm