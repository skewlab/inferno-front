import { render } from 'inferno';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'
import UserHomeView from './user-home-view/UserHomeView'

const browserHistory = createBrowserHistory();

function authorizedOnly({ props, router }) {
  // if (!props.signedIn) {
  //   router.push('/signin');
  // }
}

const routes = (

  <Router history={ browserHistory }>

	  <IndexRoute component={ App } />

		<Route path="/signup" component={ SignUp } />
	  <Route path="/signin" component={ SignIn } />
		<Route path="/signin/:username" component={ SignIn } />
		<Route path="/userhomeview" 
			component={ UserHomeView }
			onEnter={ authorizedOnly } />
		<Route path="/" component={ App }/>

	</Router>

);

render( routes, document.getElementById( 'app' ) );
