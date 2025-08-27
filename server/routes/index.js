import combineRouters from 'koa-combine-routers'

import userRouter from './users-router.js'
import productRouter from './products-router.js'

// 合并所有路由
const unifiedRouter = combineRouters(userRouter, productRouter)
export default unifiedRouter
