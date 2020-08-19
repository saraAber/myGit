var express = require('express')
var router = express.Router()

var {kategry} =require('./kategory')
var {getProducts} =require('./productes')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Super: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('indexSuper')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About Super')
})
router.get('/category',kategry)
router.get('/product',getProducts)

module.exports = router