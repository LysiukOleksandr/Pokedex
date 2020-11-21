import {makeAutoObservable, configure, action} from 'mobx'
 import axios from 'axios'
configure({enforceAction: 'observed'});

class Pokemons{
  pokemons = [];
  pokemonsTypes = [];
  checkedTypes = [];
  currentPage = 1;
  limitOnPage = 10;
  countOfPokemons = 0;
  constructor(){
    makeAutoObservable(this)
  }

  
  fetchPokemons(){
    if(this.checkedTypes.length === 0){
      this.fetchPokemonsBasic(this.limitOnPage)
    }
    if(this.checkedTypes.length >=1){
      this.fetchPokemonsByFilter(this.limitOnPage)
    }
  }



 fetchPokemonsBasic(){

     axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${this.pokemons.length === 0 ? 0 : (this.limitOnPage * this.currentPage) - this.limitOnPage}&limit=${this.limitOnPage}`)
     .then(action('fetchSuccess', response =>{
    const data = response.data.results.map((item)=>{
      return item.name
    })
    this.countOfPokemons = response.data.count;
    this.pokemons = data;
     }),
     action('fetchError', error =>{
       console.log(error)
     })
     )
  }

  fetchPokemonsByFilter(){
    let pokemons = new Set()
    this.checkedTypes.forEach((item)=>{
      axios.get(`https://pokeapi.co/api/v2/type/${item}`)
      .then(action('filterSuccess', response =>{
        response.data.pokemon.forEach((p)=>{
          pokemons.add(p.pokemon.name)
        })
        this.pokemons = Array.from(pokemons).slice(0,this.limitOnPage)
      }),
      action('filterError', error =>{
        console.log(error)
      }))
    })
  }

  fetchPokemonsTypes(){
    axios.get(`https://pokeapi.co/api/v2/type/`)
    .then(action('typesSuccess', response =>{
      const types = response.data.results.map((type) =>{
        return type.name
      })
      this.pokemonsTypes = types
    }),
    action('typesError', error =>{
      console.log(error)
    })
    )
  }


  searchPokemons( searchValue){

  }

  setLimitPageFilter(value){
    this.limitOnPage = value;
  }


  setCheckedTypes(value){
    this.checkedTypes = value
  }

  changePage(page){
    this.currentPage = page;
    this.fetchPokemons()
    
  }

  nextPage(){
    this.currentPage++;
    this.fetchPokemons()
  }

  prevPage(){
    this.currentPage--;
    this.fetchPokemons()

  }
}


export default new Pokemons()