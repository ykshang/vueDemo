import mongoose from '../db.js' // 复用连接

// 定义模型
const dataSchema = new mongoose.Schema({
  firstName: String, // 姓
  lastName: String, // 名
  fullName:String, // 全名
  email: String, // 邮箱
  dept: String, // 部门
  jobPostion: String, // 岗位
  phone: String, // 手机号
  password: String, // 密码
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
export default mongoose.model('employee', dataSchema, 'employee')
