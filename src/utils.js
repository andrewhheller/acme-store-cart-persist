// used to reorganize data to display in cart list

/* 

[

  {
    lineItemId: 1,
    productId: 1,
    quantity: 3
  },

  {
    lineItemId: 2,
    productId: 2,
    quantity: 1
  },

  {
    lineItemId: 3,
    productId: 3,
    quantity: 5
  },

]

*/

// const cartMap = (cart) => {
//   const array = [];

//   const _cartMap = cart ?
//     cart.lineItems.reduce((acc, item) => {     

//       if(item.productId in acc) {
//         acc[item.productId]['quantity'] += item.quantity
//       }
//       else {
//         acc[item.productId] = {}
//         acc[item.productId]['productId'] = item.productId
//         acc[item.productId]['quantity'] = item.quantity;
//         acc[item.productId]['lineItemId'] = item.id;
//       }

//       return acc;
//     }, {})

//   : ''

//   for (let key in _cartMap) {
//     let obj = {};
//     obj['productId'] = key
//     obj['quantity'] = _cartMap[key]['quantity']
//     obj['lineItemId'] = _cartMap[key]['lineItemId']
//     array.push(obj)
//   }

//   return array;
// }


// creates an array of just line items to iterate over
const cartMap = (cart) => {
  const array = [];

  cart ? cart.lineItems.forEach(item => array.push(item)) : ''

  return array.sort((a, b) => a.createdAt > b.createdAt)
}


// matches id to product id and returns name property only
const findProduct = (products, id) => {
  return products.find(product => product.id == id).name
}



export {
  cartMap,
  findProduct
}
