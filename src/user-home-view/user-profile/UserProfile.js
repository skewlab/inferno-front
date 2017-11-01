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
      profileInfo: [],
      avatar: ''
		};
  }

  // SOULD BE RCEIVED FRM SESSION LATER
  //userId = "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"


  componentDidMount() {
    ApiService.get( 'users/me' )
    .then(
      res => {
        console.log(res)
        this.setState({
          alias: res.alias["String"],
          avatar: res.avatar["String"],
          birthdate: res.birthdate["String"],
          description: res.description["String"],
          email: res.email["String"],
          phonenumber: res.phonenumber["String"],
          website: res.website["String"]
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
          src={this.state.avatar }
          alt="no avatar available"/>
        <h2>{this.state.alias}</h2>
        <ul>
          <li>
            {this.state.description}
          </li>
          <li>
          { this.state.birthdate ? 'Birthdate: ': '' } { this.state.birthdate }
          </li>
          <li>
          { this.state.website ? 'Website: ': '' } { this.state.website }
          </li>
          <li>
          { this.state.phonenumber ? 'Phone number: ': '' } { this.state.phonenumber }
          </li>
          <li>
          { this.state.email ? 'Email: ': '' } { this.state.email }
          </li>
          </ul>
      </div>
    );
  }


}

export default UserProfile;
