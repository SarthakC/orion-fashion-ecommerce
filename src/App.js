import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
