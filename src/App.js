import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';
import CheckoutPage from './pages/Checkout/Checkout';

import { selectCurrentUser } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          ></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
