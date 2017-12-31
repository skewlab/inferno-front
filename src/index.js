import { render } from 'inferno';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'
import UserHomeView from './user-home-view/UserHomeView'
import ApiService from './utils/ApiService'

const browserHistory = createBrowserHistory();

function authorizedOnly({ props, router }) {
  ApiService.auth().then(
    res => {
      // for debugging console.log(res.json())
      if( res.status !== 200){
        router.push('/signin');
      }
      if( res.status === 200){
        router.push("/userhomeview")
      }
  }, error =>{
    // TODO: Redirect to a 400 forbidden page or server error page
    console.log(error)
  })
}


const routes = (

  <Router history={ browserHistory }>

    <IndexRoute
      component={ App }
      onEnter={ authorizedOnly } />

    <Route path="/signup" component={ SignUp } />
    <Route path="/signin" component={ SignIn } />
    <Route path="/signin/:username" component={ SignIn } />
    <Route path="/userhomeview"
      component={ UserHomeView }
      onEnter={ authorizedOnly } />
  </Router>

);

render( routes, document.getElementById( 'app' ) );
