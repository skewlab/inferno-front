/*
  Author: Jonas Johansson
  Email:  jan.jonas.johansson@gmail.com
  Github: jjojo
  Description:
  Login component connected to api endpoint.
*/

import Component from 'inferno-component'
import ApiService from '../utils/ApiService';
import './sign-in.css';

class SignIn extends Component {

	constructor( props ) {
    super( props );
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind( this );
    this.handleSignIn = this.handleSignIn.bind( this );

  }

	/*
		When an input in the form is changed. Update the state.
	*/
  handleChange( event ) {

    if( event.target.id === "email" ) {
      this.setState( { email: event.target.value } );
    }

    if ( event.target.id === "password" ) {
      this.setState( { password: event.target.value } );
    }

  }

	/*
		When form is submitted, send the user credentials to the server
		for processing the login.
	*/
  handleSignIn( event ) {
    const { router } = this.context
		ApiService.post( 'signin', this.state )
    .then(
      ( res ) => {
        // TODO: Handle response
        console.log( res )
        router.push("/userhomeview")
      },
      ( error ) => {
        // TODO: show error in the view
        console.log( error )
      }
    );

    event.preventDefault();

  }

	/*
		Construct the HTML for the view.
	*/
	render( props ) {

		return (

      <div className="sign-in">

					<h1>Sign in</h1>

					<form onSubmit={this.handleSignIn}>

						<input
              id="email"
              type="email"
              name="email"
							placeholder="email"
              value={this.state.email}
              onInput={this.handleChange} />

            <input
              id="password"
              type="password"
              name="password"
							placeholder="password"
              value={this.state.password}
              onInput={this.handleChange} />

						<span className="full-link-wrapper"><a href="/">Forgot your password?</a></span>

            <input className="button" type="submit" value="Sign in" />
						<a href="/signup" className="button" >Register</a>

          </form>
      </div>

    );

  }

}

export default SignIn;
