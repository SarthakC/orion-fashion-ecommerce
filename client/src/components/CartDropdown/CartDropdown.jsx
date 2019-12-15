import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cartActions';

import CartItem from '../CartItem/CartItem';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './CartDropdownStyles';

import { selectCartItems } from '../../redux/cart/cartSelectors';

export const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item}></CartItem>)
        ) : (
          <EmptyMessageContainer>Your Cart Is Empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      {cartItems.length ? (
        <CartDropdownButton
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CartDropdownButton>
      ) : null}
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
