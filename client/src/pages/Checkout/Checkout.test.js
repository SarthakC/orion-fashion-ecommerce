import React from 'react';
import { shallow } from 'enzyme';
import { Checkout } from './Checkout';

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 100,
  };

  wrapper = shallow(<Checkout {...mockProps} />);
});

it('should render CheckoutPage component', () => {
  expect(wrapper).toMatchSnapshot();
});
