const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductSchema = new Schema({
  productName: {type: String, required: true}, // 商品名
  banner: {type: Array, required: true}, // 轮播图
  details: {type: String}, // 详情
  specificationList: {type: Array, required: true} // 规格
})
module.exports = mongoose.model('Product', ProductSchema)