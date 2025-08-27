import combineRouters from 'koa-combine-routers'

import userRouter from './users-routes.js'
import productRouter from './products-routes.js'

// 合并所有路由
const unifiedRouter = combineRouters(userRouter, productRouter)
export default unifiedRouter
