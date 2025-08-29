import DictionaryModel from '../models/dictionary.js'
import DictionaryLangModel from '../models/dictionary-lang.js'
// import DictionaryItemModel from '../models/dictionary-item.js'
// import DictionaryItemLangModel from '../models/dictionary-item-lang.js'
async function getDictionaryList(request) {
  const userList = await DictionaryModel.find()
  let result = {}
  if (userList.length > 0) {
    result.status = 'success'
    result.msg = '获取字典列表成功'
    result.data = userList[0]
  } else {
    result.status = 'error'
    result.msg = '获取字典列表失败'
    result.data = null
  }
  return result
}

async function getDictionaryLangList(request) {
  const userList = await DictionaryLangModel.find()
  let result = {}
  if (userList.length > 0) {
    result.status = 'success'
    result.msg = '获取字典列表成功'
    result.data = userList[0]
  } else {
    result.status = 'error'
    result.msg = '获取字典列表失败'
    result.data = null
  }
  return result
}
export default {
  getDictionaryList,
  getDictionaryLangList,
}
