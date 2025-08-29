import Koa from 'koa'
import { connectDB } from './db.js'
import bodyParser from 'koa-bodyparser'

import unifiedRouter from './routes/routes.js'

// 启动时连接数据库
connectDB()
  .then(() => {
    console.log('Database connection ready')
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err)
    process.exit(1) // 如果连接失败，退出应用
  })
// 初始化 koa
const app = new Koa()
app.use(bodyParser()) // 解析参数的 body 请求体
app.use(unifiedRouter())
// 启动服务器
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
