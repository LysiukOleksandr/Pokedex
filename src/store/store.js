import {makeAutoObservable, configure, action} from 'mobx'
 import axios from 'axios'
configure({enforceAction: 'observed'});

class Pokemons{
  pokemons = [];
  filterPokemons = [];
  constructor(){
    makeAutoObservable(this)
  }

 fetchPokemons(limit){
     axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit !== '' ? limit : 10}`)
     .then(action('fetchSuccess', response =>{
       this.pokemons = response.data
     }),
     action('fetchError', error =>{
       console.log(error)
     })
     )
  }

  fetchPokemonsByFilter(value){
    let pokemons = new Set([])
    value.forEach((item)=>{
      axios.get(`https://pokeapi.co/api/v2/type/${item}`)
      .then(action('filterSuccess', response =>{
        response.data.pokemon.forEach((p)=>{
          pokemons.add(p.pokemon.name)
        })
        this.filterPokemons = Array.from(pokemons)
      }),
      action('filterError', error =>{
        console.log(error)
      }))
    })
    
  }

}


export default new Pokemons()