import Component from 'inferno-component';
import ApiService from '../../utils/ApiService';
import './user-feed.css';

class UserFeed extends Component {
  constructor(props) {
		super(props);
		this.state = {
			feedPosts: []
		};
	}

  componentDidMount() {
    // REMOVE LOOP WHEN API ALLOWS TO FETCH WHOLE FEED
    // THIS IS JUST FOR TESTING
    for (var i = 1; i < 4; i++) {
      ApiService.getPost( i )
      .then(
        res => {
          this.state.feedPosts.push(res)
          this.setState({
            feedPosts: this.state.feedPosts
          });
        },
        error => {
          console.log(error)
        }
      );
    }
  }

  render(){
    return(
      <div className='profile-feed' >
        {this.state.feedPosts.map(post => 
        <div className="post">
          <p>
            Id: {post.Id}
            <h2>
              {post.Content}
            </h2>
            Author: {post.Userid}
            <br></br>
            Date: {post.Date_created}
          </p>
        </div>
      )}
      </div>
    )
  }
}

export default UserFeed;
