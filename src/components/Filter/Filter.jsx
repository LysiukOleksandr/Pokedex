import React from 'react';
import './Filter.css'
import FilterItem from './FilterItem/FilterItem'
import {observer} from 'mobx-react-lite'
import store from '../../store/store'

const Filter = observer(() =>{
  const [types, setTypes] = React.useState([])


  function handleChange(e){
    const item = e.target.value
    const isChecked = e.target.checked;
    let newArr = [];

    if(isChecked){
      newArr = [...types, item]
      setTypes(newArr)
    }
    if(!isChecked){
      newArr = types.filter((el)=> el !== item);
     setTypes(newArr)
    }
    store.setCheckedTypes(newArr)
    // store.fetchPokemonsByFilter(newArr)
    store.testFetchPokemons()
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