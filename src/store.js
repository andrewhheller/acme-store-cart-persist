import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import { productsReducer } from './reducers/products';
import { ordersReducer } from './reducers/orders';
import { cartReducer } from './reducers/cart';
import { countReducer } from './reducers/count';

/* 

  products: []
  cartId: { orderId: UUID }
  orders: []
  count: 0

*/


const reducer = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
  cartId: cartReducer,
  count: countReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger));



export default store;
