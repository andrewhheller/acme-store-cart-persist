import axios from 'axios';

import { loadOrders } from './orders';



// action constants
const CREATE_CART = 'CREATE_CART';
const UPDATE_CART = 'UPDATE_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


// action creators
const _createCart = (order) => {
  return {
    type: CREATE_CART,
    order
  }
}


// thunks
const createCart = () => {
  return (dispatch) => {
    return axios.get('/api/orders/cart')
      .then(response => response.data)
      .then(order => dispatch(_createCart(order)))
      .catch(error => console.log(error))
  }
}

const addToCart = (product, cartId, history) => {
  return (dispatch) => {

      // this will create a lineItem with default quantity of 1,
      // product id, and
      // order status of CART
      const lineItem = { productId: product.id }
      return axios.post(`/api/orders/${cartId.orderId}/lineItems`, lineItem)
        .then(response => response.data)
    

      // load orders
      .then(() => dispatch(loadOrders()))

      // redirect to cart page
      .then(() => history.push('/cart'))

      // error handling
      .catch(error => console.log(error))
  }
}

const incrementItem = item => {
  return (dispatch) => {
    const _item = { productId: item.productId, quantity: ++item.quantity }
    axios.put(`/api/orders/${item.orderId}/lineItems/${item.id}`, _item)
      .then(() => dispatch(loadOrders()))
      .catch(error => console.log(error))
  }
}

const decrementItem = item => {
  return (dispatch) => {
    const _item = { productId: item.productId, quantity: --item.quantity }
    axios.put(`/api/orders/${item.orderId}/lineItems/${item.id}`, _item)
      .then(() => dispatch(loadOrders()))
      .catch(error => console.log(error))
  }
}

const removeFromCart = item => {
  return (dispatch) => {
    return axios.delete(`/api/orders/${item.orderId}/lineItems/products/${item.productId}`)
      .then(() => dispatch(loadOrders()))
      .catch(error => console.log(error))
  }
}

const cartReducer = (state = {}, action) => {
  
  switch(action.type) {
    
    case CREATE_CART:
      state = { ...state, orderId: action.order.id }
      break;
  }

  return state;
}


export {
  cartReducer,
  createCart,
  addToCart,
  incrementItem,
  decrementItem,
  removeFromCart
}
