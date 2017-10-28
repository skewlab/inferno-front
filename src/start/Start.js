import Component from 'inferno-component';
import './start.css';
import SignIn from '../signin/SignIn';


class Start extends Component {

  render() {
    return (
      <div className="start">
        <SignIn/>
      </div>
    );
  }
	
}

export default Start;
