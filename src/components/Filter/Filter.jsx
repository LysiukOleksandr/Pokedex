import React from 'react';
import './Filter.css'

function Filter(){
  return(
    <div className='filter'>
      <form className='filter__form'>
        <div className="filter__item">
        <label className='filter__label' htmlFor="type">Water</label>
        <input className='filter__input' type='checkbox' name='type' value='water' />
        </div>
        <div className="filter__item">
        <label className='filter__label' htmlFor="type">Water</label>
        <input className='filter__input' type='checkbox' name='type' value='water' />
        </div>
        <div className="filter__item">
        <label className='filter__label' htmlFor="type">Water</label>
        <input className='filter__input' type='checkbox' name='type' value='water' />
        </div>
      </form>
    </div>
  )
}

export default Filter