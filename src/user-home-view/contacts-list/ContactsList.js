/*
Author: Jonas Johansson
Email:  jan.jonas.johansson@gmail.com
Github: jjojo
Description:
contacts-list to show your contacts, and who is online right now
*/

import Component from 'inferno-component';
import ApiService from '../../utils/ApiService';
import './contacts-list.css';


class ContactsList extends Component {
  constructor( props ) {
		super( props );
		this.state = {
			contacts: [ { username:"Simon Garfunkel" } ]
		};
  }

  userId="aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"

  componentDidMount() {
    ApiService.get( "my-contacts/" + this.userId )
    .then(
      res => {
        // Should update contacts if contact is added in database
        // this.setState({
        //   contacts: res
        // });
      },
      error => {
        console.log(error)
      }
    );
  }



  render() {
    return (
    <div className="contacts-list">
      {this.state.contacts.map(contact =>
        <div className="contact">
            <h2>
              {contact.username}
            </h2>
        </div>
      )}
    </div> /* wrapper ends */

    );
  }


}

export default ContactsList;
