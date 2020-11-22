import React from "react"
import './PokemonDetails.css'

const PokemonDetails = () =>{
  return(
    <div className="pokemon-details">
      <img className='pokemon-details__image' src ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'  />
      <p className="pokemon-details__id">1</p>
      <h1 className='pokemon-details__title'>Name: Bulbasaur</h1>
      <p className="pokemon-details__weight">Weight: 56</p>
      <p className="pokemon-details__experience">Experience: 64</p>
      <p className="pokemon-details__hp">Experience: 64</p>
      <p className="pokemon-details__defense">Defense: 49</p>
      <p className="pokemon-details__attack">Attack: 51</p>
    </div>
  )



}



export default PokemonDetails;