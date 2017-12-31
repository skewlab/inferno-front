
import Component from 'inferno-component';

import './avatar.css';

class Avatar extends Component {

  render(){
    return(
      <div className="avatar-wrapper">
        <img src={ this.props.avatar } alt="unable to load"/>
      </div>
    )
  }

}

export default Avatar;
