import Component from 'inferno-component';
import './start.css';
import Login from '../login/Login'


class Start extends Component {

  render() {
    return (
      <div className="start">
        <h1>Welcome!</h1>
        <p>
          Welcome to a social network built with GO and Inferno!
        </p>
        <Login/>
      </div>
    );
  }


}

export default Start;
