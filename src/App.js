import { version } from 'inferno';
import Component from 'inferno-component';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import { Link } from 'inferno-router';
import Header from './header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">     
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/login">Logga in</Link>
      </div>
    );
  }
}

export default App;
