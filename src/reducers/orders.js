import axios from 'axios'

import { createCart } from './cart';



// action constants
const LOAD_ORDERS = 'LOAD_ORDERS';


// action creators
const _loadOrders = orders => {
  return {
    type: LOAD_ORDERS,
    orders
  }
}




// thunks

// if a cart already exists, it will return this cart or create a new cart that order
const loadOrders = () => {
  return (dispatch) => {
    axios.get('/api/orders')
      .then(response => response.data)
      .then(orders => dispatch(_loadOrders(orders)))
      .catch(error => console.log(error))
  }
}

const createOrder = (orderId, history) => {
  return (dispatch) => {
    axios.put(`/api/orders/${orderId}`, { status: 'ORDER' })
      .then(() => dispatch(createCart()))
      .then(() => dispatch(loadOrders()))
      .then(() => history.push('/orders'))
      .catch(error => console.log(error))
  }
}

const resetOrders = (history) => {
  return (dispatch) => {
    axios.delete('/api/orders/reset')
      .then(() => dispatch(createCart()))
      .then(() => dispatch(loadOrders()))
      .then(() => history.push('/'))
      .catch(error => console.log(error))
  }
}


// individual reducer
const ordersReducer = (state = [], action) => {

  switch(action.type) {

    case LOAD_ORDERS:
      state = action.orders;
      break;

  }

  return state;
}





export {
  ordersReducer,
  loadOrders,
  createOrder,
  resetOrders
}
