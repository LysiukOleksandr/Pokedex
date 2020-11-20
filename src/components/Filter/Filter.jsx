import React from 'react';
import './Filter.css'
import FilterItem from './FilterItem/FilterItem'
import {observer} from 'mobx-react-lite'
import store from '../../store/store'

const Filter = observer(() =>{

  const [types,setTypes] = React.useState(new Set())


  function handleChange(e){
    const item = e.target.value
    const isChecked = e.target.checked;
    
    if(isChecked){
      setTypes(types.add(item))
    }
    else if(!isChecked){
      setTypes(types.delete(item))
    }
    console.log(types)
  }

  React.useEffect(()=>{
    store.fetchPokemonsTypes()
  },[])

  return(
    <div className='filter'>
      <form className='filter__form'>
        {
          store.pokemonsTypes &&
          store.pokemonsTypes.map((item)=>{
            return <FilterItem item={item} onChange={handleChange} key={item} />
          })
        }
      </form>
    </div>
  )
})

export default Filter