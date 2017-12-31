
import Component from 'inferno-component';
import Avatar from '../avatar/Avatar';
import './user-avatar-alias.css';

class UserAvatarAlias extends Component {

  render(){
    return(
      <div className="avatar-alias-wrapper">
        <Avatar avatar={ this.props.avatar } />
        <h2> { this.props.alias } </h2>
      </div>
    )
  }

}

export default UserAvatarAlias;
