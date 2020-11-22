import {makeAutoObservable, configure, action, runInAction} from 'mobx'
 import axios from 'axios'
configure({enforceAction: 'observed'});

class Pokemons{

  pokemons = [];
  pokemonsTypes = [];
  checkedTypes = [];
  filteredPokemons = [];
  searchedPokemons = [];
  currentPage = 1;
  limitOnPage = 10;
  countOfPokemons = 0;
  fixedCountOfPokemons = 1050;
  searchValue = '';
  
  constructor(){
    makeAutoObservable(this)
  }

  
  fetchPokemons(){
      if(this.searchValue !== '' || this.searchPokemons.length > 0){
        this.searchPokemons()
      }
    if(this.checkedTypes.length === 0){
      this.fetchPokemonsBasic()
    }
     if(this.checkedTypes.length >=1){
      this.fetchPokemonsByFilter()
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
    let startLocalOffset = (this.limitOnPage * this.currentPage) - this.limitOnPage;
    let endLocalOffset = (this.limitOnPage * this.currentPage);
    let pokemons = new Set()
    this.checkedTypes.forEach ((item)=>{
    axios.get(`https://pokeapi.co/api/v2/type/${item}`)
      .then(action('filterSuccess', response =>{
        response.data.pokemon.forEach((p)=>{
          pokemons.add(p.pokemon.name)
        })
        this.filteredPokemons = Array.from(pokemons);
        this.pokemons = this.filteredPokemons.slice(startLocalOffset, endLocalOffset)
        this.countOfPokemons = this.filteredPokemons.length;
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


  async searchPokemons(){
    
    let startLocalOffset = (this.limitOnPage * this.currentPage) - this.limitOnPage;
    let endLocalOffset = (this.limitOnPage * this.currentPage);
    if(this.searchedPokemons.length === 0 || this.searchValue[0] !== this.pokemons[0][0]){
    this.currentPage = 1;
    
    try{
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${this.fixedCountOfPokemons}`)
    this.searchedPokemons= res.data.results.map((item)=>{
       return item.name
      })
      runInAction(()=>{
        this.pokemons = this.searchedPokemons.filter((item)=> item.startsWith(this.searchValue)).slice(startLocalOffset, endLocalOffset)

      })
    }
    catch{
      console.log('something went wrong')
    }
      
  }
    else if(this.searchedPokemons.length !== 0 ){
      runInAction(()=>{
        this.pokemons = this.searchedPokemons.filter((item)=> item.startsWith(this.searchValue)).slice(startLocalOffset, endLocalOffset)

      })
      console.log(this.pokemons)
    }
  }

  setSearchValue(value){
    this.searchValue = value
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