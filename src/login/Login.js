import Component from 'inferno-component';
import './login.css';

class Login extends Component {

  handleClick() {
    console.log("Button is clicked")
  }

  render() {
    return (
      <div className="Login">
        <form>
          <label for="email">E-mail:</label>
          <input id="email" type="email" name="email" />
          <label for="password">Password:</label>
          <input id="password" type="password" name="password" />
          <button onClick={() => this.handleClick()}>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
