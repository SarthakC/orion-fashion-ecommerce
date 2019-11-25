import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCounts } from '../../redux/cart/cartSelectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemCount: selectCartItemsCounts(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
