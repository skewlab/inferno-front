/*
Author: Jonas Johansson
Email:  jan.jonas.johansson@gmail.com
Github: jjojo
Description:
contacts-list to show your contacts, and who is online right now
*/

import Component from 'inferno-component';
import ApiService from '../../utils/ApiService';
import Avatar from '../../components/avatar/Avatar';
import UserAvatarAlias from '../../components/user-avatar-alias/UserAvatarAlias';
import './contacts-list.css';


class ContactsList extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    ApiService.get( "my-contacts" )
    .then(
      res => {
        console.log(res)
        // Should update contacts if contact is added in database
        this.setState({
          contacts: res
        });
      },
      error => {
        console.log(error)
      }
    );
  }



  render() {
    return (
    <div className="contacts-list">
      <h2>Contacts</h2>
      {this.state.contacts.map(contact =>
        <div className="contact">
          <UserAvatarAlias avatar={ contact.avatar[ "String" ] } alias={ contact.alias[ "String" ] }/>
        </div>
      )}
    </div> /* wrapper ends */

    );
  }


}

export default ContactsList;
