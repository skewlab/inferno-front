/*
  Authors:			Jonas Johansson, jan.jonas.johansson@gmail.com, github.com/jjojo
								Filip Johansson, filip.carl.johansson@gmail.com, github.com/fippli

  Description:	Sign up component.
*/

import Component from 'inferno-component';
import ApiService from '../utils/ApiService';

import './sign-up.css';

class SignUp extends Component {

	constructor( props ) {
    super( props );

		this.state = {
      email: null,
			alias: null,
      password: null,
      repeatPassword: null
    };

    this.handleChange = this.handleChange.bind( this );
    this.handleSignUp = this.handleSignUp.bind( this );
  }

  handleChange( event ) {

		if( event.target.id === "email" ) {
      this.setState( { email: event.target.value } );
    }

		if( event.target.id === "alias" ) {
      this.setState( { alias: event.target.value } );
    }

		if ( event.target.id === "password" ) {
      this.setState( { password: event.target.value } );
    }

		if ( event.target.id === "repeat-password" ) {
      this.setState( { repeatPassword: event.target.value } );
    }
  }


  handleSignUp( event ) {

		if( this.state.password === this.state.repeatPassword &&
			this.state.email !== null &&
			this.state.alias !== null ) {
      ApiService.post( 'users', this.state )
			.then(
        ( res ) => {
          // TODO: should show up in view that ser is successfully added
          console.log( res )
					// Something like user = res.data
					// Reroute to home view
        },
        ( error ) => {
          // TODO: should show up in view that an error occured
          console.log( error )
        }
      );
    }
    event.preventDefault();
  }


  render( props ) {
    return (
      <div className="sign-in">

					<h1>Sign Up</h1>

					<form onSubmit={this.handleSignUp}>

						<input
              id="email"
              type="email"
              name="email"
							placeholder="email"
              value={this.state.email}
              onInput={this.handleChange} />

							<input
	              id="alias"
	              type="text"
	              name="alias"
								placeholder="alias"
	              value={this.state.alias}
	              onInput={this.handleChange} />

						<input
              id="password"
              type="password"
              name="password"
							placeholder="password"
              value={this.state.password}
              onInput={this.handleChange} />

						<input
              id="repeat-password"
              type="password"
              name="repeat-password"
							placeholder="repeat password"
              value={this.state.repeatPassword}
              onInput={this.handleChange} />

						<span className="full-link-wrapper"><a href="/signin">Already have account?</a></span>

						<input
							className="button"
              type="submit"
							disabled={(this.state.email
                && this.state.password
                && this.state.repeatPassword
								&& this.state.alias) ? "" : "disabled"}>Sign Up</input>
          </form>

      </div>
    );
  }
}

export default SignUp;
