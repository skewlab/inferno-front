
import Component from 'inferno-component';

import './up-button.css';
import ApiService from '../../utils/ApiService';

class UpButton extends Component {

	constructor( props ) {
    super( props );
		this.state = {
			upped: props.upped,
			ups: props.ups,
			contentId: props.contentId
		};

		this.up = this.up.bind( this );
	}

	up() {
		console.log( "Im uppin" );
		// TODO:
		// Push the up to the server.
		let data = {
			userid: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
			postid: this.state.contentId
		}
		ApiService.post( "ups", data )
		this.setState({
			upped: !this.state.upped,
		})
	}

	render(){
		return(
			<div className="up-button-wrapper">
				<button onClick={ this.up } className={ this.state.upped ? "up-button active" : "up-button" }>UP</button>
				<div className="up-ammount">{this.state.ups}</div>
			</div>
		)
	}

}

export default UpButton;
