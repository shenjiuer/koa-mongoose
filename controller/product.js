const Product = require('../model/product')
const dbHepler = require('../utils/dbHepler')
const add = async (ctx) => {
  let res = await dbHepler.add(ctx, Product)
  ctx.body = {
    status: 0,
    message: 'success',
    productId: res['_id']
  }
}
const del = async (ctx) => {
  let res = await dbHepler.del({_id: ctx.request.body.id}, Product)
  if (res.ok === 1) {
    ctx.body = {
      status: 0,
      message: 'success'
    }
  }
}
const put = async (ctx) => {
  let res = await dbHepler.put(ctx, {_id: ctx.params.id}, Product)
  if (res.ok === 1) {
    ctx.body = {
      status: 0,
      message: 'success'
    }
  }
}
const findOne = async (ctx) => {
  let res = await dbHepler.findOne(ctx.params.id, Product)
  if (res) {
    ctx.body = {
      status: 0,
      message: 'success',
      data: res
    }
  }
}
const find = async (ctx) => {
  let query = ctx.query
  for (let key in query) {
    if (key === 'psize' || key === 'pnum') {
      query[key] = parseInt(query[key])
    }
  }
  let data = await dbHepler.find(query, Product)
  ctx.body = {
    status: 0,
    message: 'success',
    data: data
  }
}
module.exports = {
  add,
  del,
  put,
  findOne,
  find
}