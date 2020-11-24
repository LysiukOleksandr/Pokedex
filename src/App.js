import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Home from './pages/Home'
import PokemonDetails from './pages/PokemonDetails/PokemonDetails'
import { Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Route exact path='/' component={Home} />
        <Route path='/:id' component={PokemonDetails} />
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
