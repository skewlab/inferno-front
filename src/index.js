import { render } from 'inferno';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './login/Login';
import UserHomeView from './user-home-view/UserHomeView'
 
const browserHistory = createBrowserHistory();
 
const routes = (
  <Router history={ browserHistory }>
	  <IndexRoute component={ App } />
	  <Route path="/login" component={ Login }>
		<Route path="/login/:username" component={ Login } />
	</Route>
	<Route path="/userhomeview" component={ UserHomeView } />

	  <Route path="/" component={ App }/>
  </Router>
);

render(routes, document.getElementById('app'));
