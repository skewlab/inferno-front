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
  userId = "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"


  componentDidMount() {
    ApiService.get( 'users/' +  this.userId )
    .then(
      res => {
        this.setState({
           profileInfo: res,
           avatar: res.avatar[ "String" ],
           alias: res.alias[ "String" ],
					 description: res.description[ "String" ]
        });
      },
      error => {
        console.log( error )
      }
    );
  }

  key = "String"

  render() {
    return (
      <div className="profile-info">
        <img
          src={ this.state.avatar }
          alt="no avatar available"/>
        <h2 className="user-profile-name">{ this.state.alias }</h2>


				<p className="user-description">{ this.state.description }</p>

        <ul>
        { Object.keys( this.state.profileInfo ).map( ( key ) =>
            <li>
            	{ key !== "avatar"? this.state.profileInfo[ key ][ "String" ] : ''}
            </li>
        )}
          </ul>
        }

      </div>
    );
  }


}

export default UserProfile;
