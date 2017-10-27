/*
Author: Jonas Johansson
Email:  jan.jonas.johansson@gmail.com
Github: jjojo
Description:
Home view to show, profile info, news feed and online friends
*/

import Component from 'inferno-component';
import UserProfile from './user-profile/UserProfile';
import UserFeed from './user-feed/UserFeed';
import ContactsList from './contacts-list/ContactsList';
import Header from '../header/Header'
import './user-home-view.css';


class UserHomeView extends Component {

  render() {
    return (
    <div className="wrapper">
      <Header/>
      <div className="user-home-view">
        <UserProfile/>
        <UserFeed/>
        <ContactsList/>
      </div>
    </div> /* wrapper ends */
      
    );
  }


}

export default UserHomeView;
