import logo from './assets/images/logo.svg';
import './App.css';
import HEADER from './components/header/header';
import NAV from './components/header/navigation/nav';
import ABOUT from './components/aboutme/aboutme';
import PORFOLIO from './components/portfolio/portfolio';
import CONTACT from './components/contact/contact';
import RESUME from './components/resume/resume';
import FOOTER from './components/footer/footer';

function App() {
  return (
    <div className="App">
        
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HEADER />
        <NAV />
        <ABOUT />
        <PORFOLIO />
        <CONTACT />
        <RESUME />
        <FOOTER />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
