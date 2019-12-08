import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  StyledLogo,
} from './Header.styles';

import { signOutStart } from '../../redux/user/userActions';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <StyledLogo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' className='option' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className='option' to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
