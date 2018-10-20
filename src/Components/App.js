import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadProducts } from '../reducers/products';
import { loadOrders } from '../reducers/orders';
import { createCart } from '../reducers/cart';

import Nav from './Nav';
import Header from './Header';
import Products from './Products';
import Cart from './Cart'
import Orders from './Orders';


class App extends Component {

  componentDidMount() {
    const { onLoadProducts, onLoadOrders, onCreateCart } = this.props;

    onLoadProducts();
    onLoadOrders();
    onCreateCart();
  }

  render() {
    return (
      <Router>
        <div className="main">
        <Route path="/" component={Nav} />
        <Route path="/" component={Header} />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/orders" component={Orders} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadProducts: () => dispatch(loadProducts()),
    onLoadOrders: () => dispatch(loadOrders()),
    onCreateCart: () => dispatch(createCart())
  }
}

export default connect(null, mapDispatchToProps)(App);
