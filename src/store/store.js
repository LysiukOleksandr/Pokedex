import { makeAutoObservable, configure, runInAction } from 'mobx'
import axios from 'axios'
configure({ enforceAction: 'observed' })

class Pokemons {
  pokemons = [] // pokemons which we should render
  allPokemons = [] // all pokemons
  pokemonsTypes = [] // pokemons types
  searchedPokemons = [] // searched pokemons
  filteredPokemons = [] // filtered pokemons
  currentType = '' // current type
  currentPage = 1 // current page
  limitOnPage = 10 // limit on one page (10/20/50)
  countOfPokemons = 0 // all count of pokemons
  searchValue = '' // search value

  constructor() {
    makeAutoObservable(this)
  }

  async fetchPokemons() {
    let startLocalOffset =
      this.limitOnPage * this.currentPage - this.limitOnPage
    let endLocalOffset = startLocalOffset + this.limitOnPage
    // all pokemons we have in API
    if (this.pokemons.length < 1) {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=1&offset=0`
        )
        runInAction(() => {
          this.countOfPokemons = res.data.count
        })
      } catch {
        console.log('something went wrong f1')
      }

      try {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${this.countOfPokemons}&offset=0`
        )
        runInAction(() => {
          this.allPokemons = poke.data.results
          this.pokemons = this.allPokemons.slice(0, this.limitOnPage)
        })
      } catch {
        console.log('something went wrong f2')
      }
    } else if (this.searchValue !== '') {
      this.searchPokemons(this.searchValue, startLocalOffset, endLocalOffset)
    } else if (this.filteredPokemons.length >= 1) {
      this.filterPokemons(this.currentType, startLocalOffset, endLocalOffset)
    } else {
      this.pokemons = this.allPokemons.slice(startLocalOffset, endLocalOffset)
    }
  }

  // fetch all pokemon types from API

  async fetchPokemonsTypes() {
    try {
      let res = await axios.get(`https://pokeapi.co/api/v2/type/`)
      res = res.data.results.map((type) => {
        return type.name
      })
      runInAction(() => {
        this.pokemonsTypes = res
      })
    } catch {
      console.log('something went wrong fpt')
    }
  }
  setLimitOnPage(val) {
    runInAction(() => (this.limitOnPage = val))
    this.fetchPokemons()
  }

  // search pokemons by input value from SearchForm

  searchPokemons(val, start = 0, end = this.limitOnPage) {
    if (val.length >= 1) {
      try {
        runInAction(() => {
          this.filteredPokemons = []
          this.searchValue = val
        })
        runInAction(() => {
          this.searchedPokemons = this.allPokemons.filter((item) => {
            return item.name.startsWith(this.searchValue)
          })
          this.countOfPokemons = this.searchedPokemons.length
          this.pokemons = this.searchedPokemons.slice(start, end)
        })
      } catch {
        console.log('something went wrong sp')
      }
    }
  }

  async filterPokemons(val, start = 0, end = this.limitOnPage) {
    if (val.length) {
      runInAction(() => {
        this.searchedPokemons = []
        this.searchValue = ''
        this.currentType = val
      })
      try {
        let res = await axios.get(`https://pokeapi.co/api/v2/type/${val}`)
        runInAction(() => {
          this.filteredPokemons = res.data.pokemon.map((item) => item.pokemon)
          this.pokemons = this.filteredPokemons.slice(start, end)
          this.countOfPokemons = this.filteredPokemons.length
        })
      } catch {
        console.log('something went wrong fp')
      }
    }
  }

  changeCurrentPage(val) {
    runInAction(() => (this.currentPage = val))
    this.fetchPokemons()
  }

  resetData() {
    runInAction(() => {
      this.searchedPokemons = []
      this.filteredPokemons = []
      this.currentType = ''
      this.currentPage = 1
      this.limitOnPage = 10
      this.searchValue = ''
    })
  }
}

export default new Pokemons()
