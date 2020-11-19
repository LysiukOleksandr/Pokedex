import {makeAutoObservable} from 'mobx'


class Pokemons{
  pokemons = [];
  constructor(){
    makeAutoObservable(this)
  }

  
}


export default new Pokemons()