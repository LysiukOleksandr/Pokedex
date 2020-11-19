import './App.css';
import Header from './components/Header/Header'
// import Home from './pages/Home'
import Test from './components/Test'

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        {/* <Home/> */}
        <Test />
      </main>
    </div>
  );
}

export default App;
