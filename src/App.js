import logo from './logo.png';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To start the game press: 'Play'
        </p>
        <>
        <NavBar />
        </>
      </header>
    </div>
  );
}

export default App;
