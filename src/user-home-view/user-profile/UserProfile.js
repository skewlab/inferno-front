/*
  Author: Jonas Johansson
  Email:  jan.jonas.johansson@gmail.com
  Github: jjojo
  Description:
  Info about the user
*/

import Component from 'inferno-component';
import ApiService from '../../utils/ApiService';

import './user-profile.css';

class UserProfile extends Component {
  constructor(props) {
		super(props);
		this.state = {
      profileInfo: '',
      avatar: ''
		};
  }

  // SOULD BE RCEIVED FRM SESSION LATER
  userId = "0c2f89bf-f4d2-4463-8cfe-94422ab1929f"

 
  componentDidMount() {
    ApiService.getProfileInfo( this.userId )
    .then(
      res => {
        this.setState({
           profileInfo: res,
           avatar: res.avatar["String"],
           alias: res.alias["String"]
        });
      },
      error => {
        console.log(error)
      }
    );
  }

  key = "String"
  
  render() {
    return (
      <div className="profile-info">
        <img 
          src={this.state.avatar }
          alt="no avatar available"/>
        <h2>{this.state.alias}</h2>
        <ul>
        {Object.keys(this.state.profileInfo).map(key => 
            <li>
            { key !== "avatar"? this.state.profileInfo[key]["String"]: ''}
            </li>
        )}
          </ul>
        }
        
      </div>
    );
  }


}

export default UserProfile;