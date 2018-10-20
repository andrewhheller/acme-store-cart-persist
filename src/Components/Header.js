import React from 'react';
import { connect } from 'react-redux';

import { resetOrders } from '../reducers/orders';


const Header = ({ totalSales, onResetOrders }) => {
  return (
    <div>
      <br />
      <div className="alert alert-success" style={{ width: "300px" }}>
        <h5 className="alert-heading">({ totalSales }) Items Sold</h5>
      </div>

      <button className="btn btn-warning" onClick={() => onResetOrders()}>Reset</button>


      <br />
      <br />
    </div>
  )
}

const mapStateToProps = ({ orders }) => {

  // ### determine number of total orders ###

  // find orders with status of ORDER
  const filledOrders = orders.filter(order => order.status === 'ORDER')

  // find all quantities in all orders
  const totalOrders = (orders) => {
    let total = 0;

    orders.forEach(order => {
      const subTotal = order.lineItems.reduce((acc, item) => {
        acc += item.quantity
        return acc
      }, 0)

      total += subTotal;
    })

    return total;
  }


  return {
    totalSales: totalOrders(filledOrders)
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    onResetOrders: () => dispatch(resetOrders(history))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
