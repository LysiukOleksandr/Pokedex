import {makeAutoObservable, configure, action} from 'mobx'
 import axios from 'axios'
configure({enforceAction: 'observed'});

class Pokemons{
  pokemons = [];
  pokemonsTypes = [];
  checkedTypes = [];
  constructor(){
    makeAutoObservable(this)
  }

  
  testFetchPokemons(limit=10,types){
    if(this.checkedTypes.length === 0){
      
      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit !== '' ? limit : 10}`)
      .then(action('fetchSuccess', response =>{
     const data = response.data.results.map((item)=>{
       return item.name
     })
     this.pokemons = data;
      }),
      action('fetchError', error =>{
        console.log(error)
      })
      )
    }
    if(this.checkedTypes.length >=1){
      let pokemons = new Set()
      this.checkedTypes.forEach((item)=>{
        axios.get(`https://pokeapi.co/api/v2/type/${item}`)
        .then(action('filterSuccess', response =>{
          response.data.pokemon.forEach((p)=>{
            pokemons.add(p.pokemon.name)
          })
          this.pokemons = Array.from(pokemons).slice(0,limit)
          console.log(this.pokemons)
        }),
        action('filterError', error =>{
          console.log(error)
        }))
      })
    }
  }





//  fetchPokemons(limit){
//      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit !== '' ? limit : 10}`)
//      .then(action('fetchSuccess', response =>{
//     const data = response.data.results.map((item)=>{
//       return item.name
//     })
//     this.pokemons = data;
//      }),
//      action('fetchError', error =>{
//        console.log(error)
//      })
//      )
//   }

//   fetchPokemonsByFilter(value){
//     let pokemons = new Set()
//     value.forEach((item)=>{
//       axios.get(`https://pokeapi.co/api/v2/type/${item}`)
//       .then(action('filterSuccess', response =>{
//         response.data.pokemon.forEach((p)=>{
//           pokemons.add(p.pokemon.name)
//         })
//         this.pokemons = Array.from(pokemons)
//       }),
//       action('filterError', error =>{
//         console.log(error)
//       }))
//     })
//   }

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


  setCheckedTypes(value){
    this.checkedTypes = value
    console.log(this.checkedTypes)
  }

}


export default new Pokemons()