import Component from 'inferno-component'
import ApiService from '../utils/ApiService';
import './sign-up.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      repeatPassword: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(event) {
    if(event.target.id === "email") {
      this.setState({email: event.target.value});
    } 
    if (event.target.id === "password") {
      this.setState({password: event.target.value});
    }
    if (event.target.id === "repeat-password") {
      this.setState({repeatPassword: event.target.value});
    }
  }


  handleSignUp(event) {
    if(this.state.password === this.state.repeatPassword && this.state.email !== null){
      ApiService.signUp( this.state ).then(
        res => {
          // should show up in view that ser is successfully added
          console.log(res)
        },
        error => {
          // should show up in view that an error occured
          console.log(error)
        }
      );
    }
    event.preventDefault();
  }
  

  render(props) {
    return (
      <div className="Login">
          <h1>Sign Up!</h1>
          <p>And join the marvelous fun!</p>
          <form onSubmit={this.handleSignUp}>
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
            <input 
              id="repeat-password" 
              type="password" 
              name="repeat-password" 
              value={this.state.repeatPassword}
              onInput={this.handleChange} />
            <input 
              type="submit" 
              value="Submit"
              disabled={(this.state.email 
                && this.state.password 
                && this.state.repeatPassword) ? "" : "disabled"}>Sign Up!</input>
          </form>
      </div>
    );
  }
}

export default SignUp;
