import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartitemsCount } from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingCartIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden)
})

const mapStateToProps = state => ({
  itemCount: selectCartitemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);