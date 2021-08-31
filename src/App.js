import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a CODIZI Shop!!!">
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Las ofertas de la semana
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </div>
      </ItemListContainer>
    </div>
  );
}

export default App;
