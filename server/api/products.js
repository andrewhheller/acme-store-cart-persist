const express = require('express');
const router = express.Router();

const { Product } = require('../db').models;


// get all products
router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(error => next(error))
})


module.exports = router;
