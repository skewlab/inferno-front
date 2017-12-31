/*
Author: Jonas Johansson
Email:  jan.jonas.johansson@gmail.com
Github: jjojo
Description:
contacts-list to show your contacts, and who is online right now
*/

import Component from 'inferno-component';
import './navigation.css';


class Navigation extends Component {

  render() {
    return (
    <nav className="navigation">
      <a href="/"><i className="fa fa-home"></i> Home</a>
      <a href="/"><i className="fa fa-group"></i> Connect</a>
      <a href="/"><i className="fa fa-shower"></i> Something</a>
      <a href="/"><i className="fa fa-search"></i> Search</a>
      <a href="/"><i className="fa fa-sign-out"></i> Sign out</a>
    </nav> /* wrapper ends */

    );
  }


}

export default Navigation;
