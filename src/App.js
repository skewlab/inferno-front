import Component from 'inferno-component';
import './registerServiceWorker';
import './app.css'
import Header from './header/Header'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <div className="main-content">
          <p>Main content goes here!</p>
        </div>
      </div>
      
    );
  }
}

export default App;
