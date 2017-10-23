/*
  Author: Jonas Johansson
  Email:  jan.jonas.johansson@gmail.com
  Github: jjojo
  Description:
  Login component connected to api endpoint.
*/

import Component from 'inferno-component'
import ApiService from '../utils/ApiService';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleChange(event) {
    if(event.target.id === "email") {
      this.setState({email: event.target.value});
    } 
    if (event.target.id === "password") {
      this.setState({password: event.target.value});
    }
  }

  handleSignIn(event) {
    ApiService.signIn( this.state )
    .then(
      res => {
        // Handle response
        console.log(res)
      },
      error => {
        // show error in the view
        console.log(error)
      }
    );
    event.preventDefault();
  }

  render(props) {
    return (
      <div className="Login">
          <h1>Sign in</h1>
          <form onSubmit={this.handleSignIn}>
            <label for="email">E-mail</label>
            <input 
              id="email" 
              type="email" 
              name="email"
              value={this.state.email}
              onInput={this.handleChange} />
            <label for="password">Password</label>
            <input 
              id="password" 
              type="password" 
              name="password" 
              value={this.state.password}
              onInput={this.handleChange} />
            <input type="submit" value="Submit">Sign in</input>
          </form>
      </div>
    );
  }
}

export default Login;
