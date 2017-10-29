/*
  Author: Jonas Johansson
  Email:  jan.jonas.johansson@gmail.com
  Github: jjojo
  Description:
  Fetches and display posts to feed
*/

import Component from 'inferno-component';
import ApiService from '../../utils/ApiService';
import './user-feed.css';

class UserFeed extends Component {
  constructor( props ) {
		super( props );
		this.state = {
			feedPosts: []
		};
	}

  componentDidMount() {
    ApiService.get( "posts/all" )
    .then(
      res => {
        this.setState({
          feedPosts: res
        });
        //console.log(this.state.feedPosts)
      },
      error => {
        console.log( error )
      }
    );
  }

  render(){
    return(
      <div className='profile-feed' >
        {this.state.feedPosts.map(post =>
        <div className="post">
          <p>
            Id: {post.id}
            <h2>
              {post.content}
            </h2>
            Author: {post.userid}
            <br></br>
            Date: {post.date_created}
            <br></br>
            Ups: {post.ups}
          </p>
        </div>
      )}
      </div>
    )
  }
}

export default UserFeed;
