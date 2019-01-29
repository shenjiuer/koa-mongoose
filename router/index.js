const Router = require('koa-router')
const router = new Router()
const product = require('../controller/product')
router.post('product', product.add)
router.delete('product', product.del)
router.put('product/:id', product.put)
router.get('product/:id', product.findOne)
router.get('product', product.find)
module.exports = router