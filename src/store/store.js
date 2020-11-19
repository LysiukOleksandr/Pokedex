import {makeAutoObservable, configure, action} from 'mobx'
 import axios from 'axios'
configure({enforceAction: 'observed'});

class Pokemons{
  pokemons = [];

  constructor(){
    makeAutoObservable(this)
  }

 fetchPokemons(){
     axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
     .then(action('fetchSuccess', response =>{
       this.pokemons = response.data
     }),
     action('fetchError', error =>{
       console.log(error)
     })
     )
  }
}


export default new Pokemons()