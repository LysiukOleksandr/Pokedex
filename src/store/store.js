import {makeAutoObservable, configure, action} from 'mobx'
 import axios from 'axios'
configure({enforceAction: 'observed'});

class Pokemons{
  pokemons = [];
  constructor(){
    makeAutoObservable(this)
  }

 fetchPokemons(){
    this.pokemons = [];

     axios.get(`https://pokeapi.co/api/v2/pokemon`)
     .then(action('fetchSuccess', response =>{
       this.pokemons = response.data
       console.log(response.data)
     }),
     action('fetchError', error => {
       console.log(error)
     })
     )
     
    
  }


  
}


export default new Pokemons()