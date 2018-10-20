const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const apiProducts = require('./api/products');
const apiOrders = require('./api/orders');

const app = express();



app.use(express.static('public'));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/products', apiProducts);
app.use('/api/orders', apiOrders)

const index = path.join(__dirname, '..', 'index.html')
const errorPage = path.join(__dirname, '..', '404.html');

app.get('/', (req, res, next) => {
  res.sendFile(index)
});

app.use((req, res, next) => {
  res.status(404).sendFile(errorPage);
});


module.exports = app;
