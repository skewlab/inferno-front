import Component from 'inferno-component';
import './registerServiceWorker';
import './App.css'
import Header from './header/Header'
import Start from './start/Start'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <div className="main-content">
          <Start/>
        </div>

      </div>
      
    );
  }
}

export default App;
