import Component from 'inferno-component';
import './start.css';
import SignUp from '../signup/SignUp'


class Start extends Component {

  render() {
    return (
      <div className="start">
        <h1>Welcome!</h1>
        <p>
          Welcome to a social network built with GO and Inferno!
        </p>
        <SignUp/>
      </div>
    );
  }


}

export default Start;
