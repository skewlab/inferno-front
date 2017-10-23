import Component from 'inferno-component';
import './user-profile.css';

class UserProfile extends Component {

  profileObject = {
    username: "Jonas",
    avatar: "http://placebear.com/300/300",
    webpage: "http://jonasjohansson.net/",
    age: "25",
    sex: "male"
  }

  
  
  render() {
    return (
      <div className="profile-info">
        <img src={this.profileObject.avatar} alt="no avatar available"/>
        <div className="profile-text-info">
          <h2>{this.profileObject.username}</h2>
          <ul>
            <li>
            <span></span>Name: {this.profileObject.username}
            </li>
            <li>
            Webpage: {this.profileObject.webpage}
            </li>
            <li>
            Age: {this.profileObject.age}
            </li>
            <li>
            Sex: {this.profileObject.sex}
            </li>

          </ul>
          </div>
      </div>
    );
  }


}

export default UserProfile;
