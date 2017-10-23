import { render } from 'inferno';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './login/Login';
 
const browserHistory = createBrowserHistory();
 
const routes = (
  <Router history={ browserHistory }>
	  <IndexRoute component={ App } />
	  <Route path="/login" component={ Login }>
	    <Route path="/login/:username" component={ Login } />
	  </Route>
	  <Route path="/" component={ App }/>
  </Router>
);

render(routes, document.getElementById('app'));
