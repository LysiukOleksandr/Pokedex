import React from 'react'
import './Header.css'
import SearchForm from './SearchForm/SearchForm'
import store from '../../store/store'
import { observer } from 'mobx-react-lite'

const Header = observer(() =>{

  const filters = [10,20,50]


  return(
    <div className='header'>
      <div className="header__logo"  >
         POKEDEX 
      </div>
     <SearchForm/>
        <ul className="header__filters">
          {
            filters.map((filter) =>{
          return <li className="header__filters-item" key={filter} onClick={()=> store.fetchPokemons(filter) }>
              { filter }
          </li>
            })
          }
        </ul>
    </div>
  )
})


export default Header