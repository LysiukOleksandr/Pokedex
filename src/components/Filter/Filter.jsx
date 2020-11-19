import React from 'react';
import './Filter.css'
import {observer} from 'mobx-react-lite'
import store from '../../store/store'

const Filter = observer(() =>{

  React.useEffect(()=>{
    store.fetchPokemonsTypes()
  },[])

  return(
    <div className='filter'>
      <form className='filter__form'>
        {
          store.pokemonsTypes &&
          store.pokemonsTypes.map((item)=>{
            return <div className="filter__item" key={item}>
            <label className='filter__label' htmlFor={item}>{ item }</label>
            <input className='filter__input' id={item} type='checkbox' name='pokeType' value={item} />
            </div>
          })
        }
      
        
      </form>
    </div>
  )
})

export default Filter