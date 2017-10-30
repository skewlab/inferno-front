/*
  Author: Jonas Johansson
  Email:  jan.jonas.johansson@gmail.com
  Github: jjojo
  Description:
  Header component for the top menu
*/


import Component from 'inferno-component';
import { Link } from 'inferno-router';
import ApiService from '../utils/ApiService';
import './header.css';


class Header extends Component {

  
  /* For future implementation when user can sign in and not */
  isLoggedIn() {
    return true;
  }

  signOut( ){
    ApiService.post( "signout" ).then(
      res => {
        console.log(res)
        //need to lear how to route with inferno router...
        document.location.href = "/";
      }, error => {
        console.log(error)
      }
    )
  }


  /* My profile could show username for example */
  signedInHeader() {
    return (
      <header>
        <a onClick={ this.signOut } className="link-right link">Sign out</a>
        <Link to="/my-profile" className="link-right link" >My profile</Link>
        <Link to="/start" className="link-left link">Start</Link>
      </header>
    )
  }


  /* When not signed in, offer to sign in and about the site info */
  notSignedInHeaderMenu() {
    return (
      <header>
        <Link to="/signin" className="link-right link">Sign in</Link>
        <Link to="/about" className="link-right link" >About</Link>
        <Link to="/start" className="link-left link">Start</Link>
      </header>
    )
  }

  render() {
    return (
      <div>
        { this.isLoggedIn() ? this.signedInHeader() : this.notSignedInHeaderMenu() }
      </div>
    );
  }


}

export default Header;
