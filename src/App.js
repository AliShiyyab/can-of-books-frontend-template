import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MyFavoriteBooks from './MyFavoriteBooks';
import Login from './Login';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

import {withAuth0} from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {

  render() {
    console.log('app', this.props)
    return(
      <>
        <Router>
          {/*<IsLoadingAndError>*/}
            <Header />
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  {this.props.auth0.isAuthenticated ? <MyFavoriteBooks /> : <Login /> }
                  </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                <Route exact path="/Profile">
                <Profile />
                </Route>
              </Switch>
            <Footer />
          {/*</IsLoadingAndError>*/}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);