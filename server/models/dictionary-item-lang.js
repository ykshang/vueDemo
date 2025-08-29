import mongoose from '../db.js' // 复用连接

// 定义用户模型
const dataSchema = new mongoose.Schema({
  dictionaryItemkey: {
    type: String,
    default: '',
  }, // 字典项关键词
  lang: {
    type: String,
    default: '',
  }, // 英文名称
  zhName: {
    type: String,
    default: '',
  }, // 中文名称
  desc: {
    type: String,
    default: '',
  }, // 描述
  dictionaryKey: {
    type: String,
    default: '',
  }, // 关联的字典
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
  },
})

// 导出模型
export default mongoose.model('dictionary-item-lang', dataSchema, 'dictionary-item-lang')
