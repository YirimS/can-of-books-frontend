import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import BestBooks from "./BestBooks"
import Profile from './Profile';


import Login from './Login';
// import Logout from './Logout';

class App extends React.Component {

  render() {
    console.log('app', this.props);

    const { user, isAuthenticated } = this.props.auth0;
    console.log('props', this.props.auth0);

    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header isAuthenticated={isAuthenticated} />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {( isAuthenticated ) ? <BestBooks/> : <Login/> }
              </Route>
              <Route exact path="/Profile">
                {isAuthenticated ? <Profile /> : ''};
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}

              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
