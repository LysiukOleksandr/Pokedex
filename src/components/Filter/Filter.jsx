import React from 'react';
import './Filter.css'
import FilterItem from './FilterItem/FilterItem'
import {observer} from 'mobx-react-lite'
import store from '../../store/store'

const Filter = observer(() =>{
  const [type, setType] = React.useState('')

  React.useEffect(()=>{
    let mounted = true;
    if(mounted){
    store.changeCurrentPage(1)
    store.filterPokemons(type)
    }
    return () => mounted = false
  }, [type])

  return(
    <div className='filter'>
      <form className='filter__form'>
        {
          store.pokemonsTypes &&
          store.pokemonsTypes.map((item)=>{
            return <FilterItem item={item} onChange={() => setType(item)} key={item} />
          })
        }
      </form>
    </div>
  )
})

export default Filter