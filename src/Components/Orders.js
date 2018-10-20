import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import OrderItem from './OrderItem';


const Orders = ({ products, orders }) => {
  return (
    <div>
      <h1>Orders</h1>

      <Link to="/">
        <p>continue shopping...</p>
      </Link>

      {
        orders.map(order => {
          return <OrderItem key={order.id} order={order} products={products} />
        })
      }
    </div>
  )
}

const mapStateToProps = ({ products, orders }) => {

  // find all orders with status of ORDER
  const filledOrders = orders.filter(order => order.status === 'ORDER')

  return {
    orders: filledOrders,
    products
  }

}





export default connect(mapStateToProps)(Orders);
