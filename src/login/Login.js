import Component from 'inferno-component';
import './login.css';

class Login extends Component {

  handleClick() {
    console.log("Button is clicked")
    return false;
  }

  render() {
    return (
      <div className="Login">
          <h1>Sign in</h1>
          <label for="email">E-mail</label>
          <input id="email" type="email" name="email" />
          <label for="password">Password</label>
          <input id="password" type="password" name="password" />
          <button onClick={() => this.handleClick()}>Log in</button>
      </div>
    );
  }
}

export default Login;
