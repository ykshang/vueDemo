import mongoose from '../db.js' // 复用连接

// 定义用户模型
const dataSchema = new mongoose.Schema({
  dictionaryItemkey: {
    type: String,
    default: '',
  }, // 字典项关键词
  dictionaryItemName: {
    type: String,
    default: '',
  }, // 名称
  dictionaryKey: {
    type: String,
    default: '',
  }, // 关联 字典关键词
  desc: {
    type: String,
    default: '',
  }, // 描述
  extField1: {
    type: String,
    default: '',
  }, // 扩展字段1
  extField2: {
    type: String,
    default: '',
  }, // 扩展字段2
  extField3: {
    type: String,
    default: '',
  }, // 扩展字段3
  extField4: {
    type: String,
    default: '',
  }, // 扩展字段4
  extField5: {
    type: String,
    default: '',
  }, // 扩展字段5
  extField6: {
    type: String,
    default: '',
  }, // 扩展字段6
  extField7: {
    type: String,
    default: '',
  }, // 扩展字段7
  extField8: {
    type: String,
    default: '',
  }, // 扩展字段8
  extField9: {
    type: String,
    default: '',
  }, // 扩展字段9
  extField10: {
    type: String,
    default: '',
  }, // 扩展字段10
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }, // 更新时间
})

// 导出模型
export default mongoose.model('dictionary-item', dataSchema, 'dictionary-item')
