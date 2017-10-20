import Component from 'inferno-component';
import { Link } from 'inferno-router';
import './header.css';


class Header extends Component {

  /* For future implementation when user can sign in and not */
  isLoggedIn() {
    return false;
  }


  /* My profile could show username for example */
  signedInHeader() {
    return (
      <header>
        <Link to="/signout" className="link-right link">Sign out</Link>
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
