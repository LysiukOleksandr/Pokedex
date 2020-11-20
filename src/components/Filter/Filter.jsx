import React from 'react';
import './Filter.css'
import FilterItem from './FilterItem/FilterItem'
import {observer} from 'mobx-react-lite'
import store from '../../store/store'

const Filter = observer(() =>{
  const [types, setTypes] = React.useState([])
  window.types = types;


  function handleChange(e){
    const item = e.target.value
    const isChecked = e.target.checked;
    
   
    if(isChecked){
      setTypes([...types, item])
    }
    if(!isChecked){
      const newArr = types.filter((el)=> el !== item);
      setTypes([...newArr])
    }
    
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