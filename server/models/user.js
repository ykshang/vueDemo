import mongoose from '../db.js' // 复用连接

// 定义模型
const dataSchema = new mongoose.Schema({
  userName: {
    type: String,
    default: '',
  },
  age: {
    type: Number,
    default: 0,
  },
  gender: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
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
export default mongoose.model('user', dataSchema, 'user')
