import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/***********************************************/
//--------------------------------------------//
import Login from "./Login"
import MyFavoriteBooks from "./MyFavoriteBooks"
import Profile from './Profile';
//--------------------------------------------//
/***********************************************/
class App extends React.Component {

  render() {
    
    console.log('app', this.props)
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                {(this.props.isAuthenticated) ? <MyFavoriteBooks /> : <Login />}
                </Route>
                <Profile />
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default App;
