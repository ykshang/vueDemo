import combineRouters from 'koa-combine-routers'

import userRouter from './users.js'
import productRouter from './products.js'
import dictionaryRouter from './dictionary.js'

// 合并所有路由
const unifiedRouter = combineRouters(userRouter, productRouter, dictionaryRouter)
export default unifiedRouter
