import combineRouters from 'koa-combine-routers'

import userRouter from './user.js'
import productRouter from './product.js'
import dictionaryRouter from './dictionary.js'

// 合并所有路由
const unifiedRouter = combineRouters(userRouter, productRouter, dictionaryRouter)
export default unifiedRouter
