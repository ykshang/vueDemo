import mongoose from 'mongoose'

// 数据库连接配置
const DB_URI = 'mongodb://localhost:27017/demo'

// 连接状态
let isConnected = false

// 封装连接函数
async function connectDB() {
  if (isConnected) {
    console.log('Using existing database connection')
    return
  }

  try {
    // 连接数据库
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true
    console.log('Database connected successfully')
  } catch (err) {
    console.error('Database connection error:', err)
    // 重试连接
    setTimeout(connectDB, 5000) // 5秒后重试
  }
}

// 监听连接事件
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB')
})

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from DB')
  isConnected = false
})

// 导出连接函数和 mongoose 实例
export { connectDB, mongoose as default }
