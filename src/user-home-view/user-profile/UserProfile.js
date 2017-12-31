/*
  Author: Jonas Johansson
  Email:  jan.jonas.johansson@gmail.com
  Github: jjojo
  Description:
  Info about the user
*/

import Component from 'inferno-component';
import ApiService from '../../utils/ApiService';
import Avatar from '../../components/avatar/Avatar';

import './user-profile.css';

class UserProfile extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      profileInfo: [],
      avatar: ''
    };
  }

  componentDidMount() {
    ApiService.get( 'users/me' )
    .then(
      res => {
        console.log(res)
        this.setState({
          alias: res.alias[ "String" ],
          avatar: res.avatar[ "String" ],
          birthdate: res.birthdate[ "String" ],
          description: res.description[ "String" ],
          email: res.email[ "String" ],
          phonenumber: res.phonenumber[ "String" ],
          website: res.website[ "String" ]
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
        <Avatar avatar={ this.state.avatar } />
        <h2 className="user-profile-name">{ this.state.alias }</h2>


        <p className="user-description">{ this.state.description }</p>

        <ul>
          <li>
          <i className="fa fa-gift" aria-hidden="true"></i> { this.state.birthdate ? ' ': '' } { this.state.birthdate }
          </li>
          <li>
          <i className="fa fa-television" aria-hidden="true"></i> { this.state.website ? ' ': '' } { this.state.website }
          </li>
          <li>
          <i className="fa fa-phone" aria-hidden="true"></i> { this.state.phonenumber ? ' ': '' } { this.state.phonenumber }
          </li>
          <li>
          <i class="fa fa-envelope" aria-hidden="true"></i> { this.state.email ? ' ': '' } { this.state.email }
          </li>
        </ul>
      </div>
    );
  }


}

export default UserProfile;
