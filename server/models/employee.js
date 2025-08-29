import mongoose from '../db.js' // 复用连接

// 定义模型
const dataSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: '',
  }, // 姓
  lastName: {
    type: String,
    default: '',
  }, // 名
  fullName: {
    type: String,
    default: '',
  }, // 全名
  email: {
    type: String,
    default: '',
  }, // 邮箱
  dept: {
    type: String,
    default: '',
  }, // 部门
  jobPostion: {
    type: String,
    default: '',
  }, // 岗位
  phone: {
    type: String,
    default: '',
  }, // 手机号
  password: {
    type: String,
    default: '',
  }, // 密码
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
