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
import Navigation from './navigation/Navigation';
import './user-home-view.css';


class UserHomeView extends Component {

  render() {
    return (
    <div className="wrapper">
      <div className="user-home-view">
        <UserProfile/>
        <div className="feed-field">
          <div className="left-column">
            <UserFeed/>
          </div>
          <div className="right-column">
            <Navigation/>
            <ContactsList/>
          </div>
        </div>
      </div>
    </div> /* wrapper ends */

    );
  }


}

export default UserHomeView;
