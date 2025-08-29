import mongoose from '../db.js' // 复用连接

// 定义模型
const dataSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// 导出模型
export default mongoose.model('user-pwd', dataSchema, 'user-pwd')
