import React from 'react';


const FilterItem = ({item, onChange}) =>{
  return(
    <div className="filter__item" key={item}>
            <label className='filter__label' htmlFor={item}>{ item }</label>
            <input className='filter__input' id={item} type='checkbox' name='pokeType' value={item}  onChange={onChange}/>
            </div>
  )
}

export default FilterItem