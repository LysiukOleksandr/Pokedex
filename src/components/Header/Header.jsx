import React from 'react'
import './Header.css'
import SearchForm from './SearchForm/SearchForm'
import store from '../../store/store'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
const Header = observer(() =>{

  const filters = [10,20,50]

  function onClickFilter(val){
    store.setLimitOnPage(val)
  }

  return(
    <div className='header'>
      <Link className="header__logo" to='/' >
         POKEDEX 
      </Link>
     <SearchForm/>
        <ul className="header__filters">
       
          {
            filters.map((item) =>{
          return <li className="header__filters-item" key={item} onClick={()=> onClickFilter(item) }>
              { item }
          </li>
            })
          }
        </ul>
    </div>
  )
})


export default Header