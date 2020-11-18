import './App.css';
import Header from './components/Header/Header'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
