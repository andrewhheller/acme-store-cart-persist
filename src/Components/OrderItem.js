import React from 'react';

import { findProduct } from '../utils';


const OrderItem = ({ order, products }) => {

  return (
    <ul>
      <li style={{ fontWeight: "bold", backgroundColor: "darkgray", width: "600px" }}>{ order.id }</li>
        {
          order.lineItems.map(item => {
            return (
              <ul className="list-group" key={ item.id }>
                <li className="list-group-item">
                  { findProduct(products, item.productId) }
                  <span className="alert alert-info" style={{ marginLeft: "10px" }}>({ item.quantity })</span>
                </li>
              </ul>
            )
          })
        }
    </ul>
  )

}


export default OrderItem;
