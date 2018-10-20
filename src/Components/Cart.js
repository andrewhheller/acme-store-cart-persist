import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { cartMap } from '../utils';

import { createOrder } from '../reducers/orders';

import CartItem from './CartItem';


const Cart = ({ count, products, cartMap, orderId, onCreateOrder }) => {

  // console.log(cartMap)

  return (
    cartMap ?
      <div>

        <h1>Cart</h1>

        <Link to="/">
          <p>continue shopping...</p>
        </Link>

        <ul className='list-group'>
          {
            cartMap.map(item => {
              return <CartItem key={item.id} item={item} products={products} />
            }).sort()
          }
        </ul>

        <button className="btn btn-success" disabled={!count} onClick={() => onCreateOrder(orderId)}>
          Create Order
        </button>

        <br />
        <br />

      </div>

    : ''
  )
}


const mapStateToProps = ({ products, orders, cartId, count }) => {

  // find order with status of CART
  const cart = orders.find(order => order.status === 'CART')

  return {
    products,
    cartMap: cartMap(cart),
    orderId: cartId.orderId,
    count
  }
  
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    onCreateOrder: (orderId) => dispatch(createOrder(orderId, history))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
