import React from 'react';
import { connect } from 'react-redux';

import { productMap } from '../utils';

import { addToCart } from '../reducers/cart';


const Products = ({ products, onAddToCart, cartId }) => {

  return (

    <div>

      <h1>Products</h1>
     
      <ul className="list-group">
        {
          products.map(product => {
            return (
              <li className="list-group-item" key={ product.id }>
                { product.name }
                <button className="btn btn-info btn-sm nudge" onClick={() => onAddToCart(product, cartId)}>Add to Cart</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

}

const mapStateToProps = ({ products, cartId }) => {
  return {
    products,
    cartId
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    onAddToCart: (product, cart) => dispatch(addToCart(product, cart, history))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Products);
