/*
  Author: Jonas Johansson
  Email:  jan.jonas.johansson@gmail.com
  Github: jjojo
  Description:
  Fetches and display posts to feed
*/

import Component from 'inferno-component';
import ApiService from '../../utils/ApiService';
import UpButton from '../../components/up-button/UpButton';
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
      },
      error => {
        console.log( error )
      }
    );
  }

	/*
		TODO:
		If the user have upped a post, the
		One button for adding ups
		one for removing them
	*/
  render(){
    return(
      <div className='profile-feed' >
        { this.state.feedPosts.map( post =>
	        <div className="post">

						<div className="post-author">
							Author: { post.userid }
							Date: { post.date_created }
							<UpButton upped={ false } ups={ post.ups } contentId={ post.id } />
						</div>

						<div className="post-content">
							<p>
								{ post.content }
							</p>
						</div>


	        </div>
      		)
				}
      </div>
    )
  }
}

export default UserFeed;
