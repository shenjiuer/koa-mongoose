const Koa = require('koa')
const app = new Koa()
const router = require('./router/index')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const static = require('koa-static')
const staticPath = './static'
const mongoose = require('./utils/db')
// 静态资源
app.use(static(
  path.join( __dirname,  staticPath)
))
// 解析post参数到ctx.request.body
app.use(bodyParser())
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(8000)
console.log('serve is starting')