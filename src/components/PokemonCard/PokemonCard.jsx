import React from 'react';
import './PokemonCard.css'

function PokemonCard(){
  return(
    <div className='card'>
      <div className="card__img">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt="poke"/>

        </div>
        <p className='card__id'>1</p>
        <p className="card__name">Bulbasaur</p>
        <ul className='card__types'>
          <li className="card__type" style={{backgroundColor: 'green'}}>grass</li>
        <li className="card__type" style={{backgroundColor: 'blue'}}>poison</li>
        </ul>
    </div>
  )
}

export default PokemonCard