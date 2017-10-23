import Component from 'inferno-component';
import UserProfile from './user-profile/UserProfile'
import UserFeed from './user-feed/UserFeed'
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
      </div>
    </div> /* wrapper ends */
      
    );
  }


}

export default UserHomeView;
