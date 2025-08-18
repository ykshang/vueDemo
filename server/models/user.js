import mongoose from '../db.js' // 复用连接

// 定义用户模型
const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
})

// 导出模型
export default mongoose.model('User', userSchema)
