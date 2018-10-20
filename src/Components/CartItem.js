import React from 'react';
import { connect } from 'react-redux';

import { findProduct } from '../utils';

import { removeFromCart, incrementItem, decrementItem } from '../reducers/cart';


const CartItem = ({ item, products, onIncrementItem, onDecrementItem, onRemoveFromCart }) => {

  return (

    <li className="list-group-item" key={ item.id }>

      <span style={{ fontWeight: "bold" }}>{ findProduct(products, item.productId) }</span>
      <br />
    
      ({ item.quantity }) ordered
      <br />
    
      <div className="btn-group btn-group-sm">
        <button className="btn btn-primary" onClick={() => onDecrementItem(item)} >-</button>
        <button className="btn btn-primary" onClick={() => onIncrementItem(item)}>+</button>
        <button className="btn btn-danger" onClick={() => onRemoveFromCart(item)}>remove</button>
      </div>
    
      <br />
      <br />
    </li>

  )

}


const mapDispatchToProps = (dispatch) => {

  return {
    onIncrementItem: (item) => dispatch(incrementItem(item)),
    
    onDecrementItem: (item) => {
      if(item.quantity < 2) {
        dispatch(removeFromCart(item))
      }
      else {
        dispatch(decrementItem(item))
      }
    },

    onRemoveFromCart: (item) => dispatch(removeFromCart(item))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
