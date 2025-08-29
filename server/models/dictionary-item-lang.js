import mongoose from '../db.js' // 复用连接

// 定义用户模型
const dataSchema = new mongoose.Schema({
  dictionaryItemkey: String, // 字典项关键词
  enName: String, // 英文名称
  zhName: String, // 中文名称
  desc: String, // 描述
  dictionaryKey: String, // 关联的字典
  extField1: String, // 扩展字段1
  extField2: String, // 扩展字段2
  extField3: String, // 扩展字段3
  extField4: String, // 扩展字段4
  extField5: String, // 扩展字段5
  extField6: String, // 扩展字段6
  extField7: String, // 扩展字段7
  extField8: String, // 扩展字段8
  extField9: String, // 扩展字段9
  extField10: String, // 扩展字段10
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
