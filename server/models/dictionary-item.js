import mongoose from '../db.js' // 复用连接

// 定义用户模型
const dataSchema = new mongoose.Schema({
  dictionaryItemkey: String, // 字典项关键词
  dictionaryItemName: String, // 名称
  dictionaryKey: String, // 关联 字典关键词
  desc: String, // 描述
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
})

// 导出模型
export default mongoose.model('dictionary-item', dataSchema)
