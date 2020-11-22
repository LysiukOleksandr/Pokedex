import React from 'react'
import './Header.css'
import SearchForm from './SearchForm/SearchForm'
import store from '../../store/store'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
const Header = observer(() =>{

  const filters = [10,20,50]

  function onClickFilter(filter){
    store.setLimitPageFilter(filter)
    store.fetchPokemons();
  }

  return(
    <div className='header'>
      <Link className="header__logo" to='/' >
         POKEDEX 
      </Link>
     <SearchForm/>
        <ul className="header__filters">
          {
            filters.map((filter) =>{
          return <li className="header__filters-item" key={filter} onClick={()=> onClickFilter(filter) }>
              { filter }
          </li>
            })
          }
        </ul>
    </div>
  )
})


export default Header