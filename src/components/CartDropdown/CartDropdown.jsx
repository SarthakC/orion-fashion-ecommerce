import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../cartItem/cartItem';

import './CartDropdown.scss';

import { selectCartItems } from '../../redux/cart/cartSelectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item}></CartItem>
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
