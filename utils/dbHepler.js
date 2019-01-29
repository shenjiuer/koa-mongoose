const add = async (ctx, Model) => {
  let model = new Model(ctx.request.body)
  let res = await model.save()
  return res
}
const del = async (query, Model) => {
  return await Model.deleteOne(query, (err, res) => {
    return res
  })
}
const put = async (ctx, query, Model) => {
  return await Model.updateOne(query, ctx.request.body, (err, res) => {
    return res
  })
}
const findOne = async (query, Model) => {
  return await Model.findById(query, (err, res) => {
    return res
  })
}
const find = async (query, Model) => {
  return await Model.find().limit(query.psize).skip((query.pnum - 1) * query.psize)
}
module.exports = {
  add,
  del,
  put,
  findOne,
  find
}