import DictionaryModel from '../models/dictionary.js'
import DictionaryLangModel from '../models/dictionary-lang.js'
// import DictionaryItemModel from '../models/dictionary-item.js'
// import DictionaryItemLangModel from '../models/dictionary-item-lang.js'
async function getDictionaryList(request) {
  const result = await DictionaryModel.find()
  let response = {}
  console.log('获取字典列表参数', result)
  if (result.length > 0) {
    response.status = 'success'
    response.msg = '获取字典列表成功'
    response.data = result
  } else {
    response.status = 'error'
    response.msg = '获取字典列表失败'
    response.data = null
  }
  return response
}
async function getDictionaryLangList(request) {
  const userList = await DictionaryLangModel.find()
  let response = {}
  if (userList.length > 0) {
    response.status = 'success'
    response.msg = '获取字典列表成功'
    response.data = userList[0]
  } else {
    response.status = 'error'
    response.msg = '获取字典列表失败'
    response.data = null
  }
  return response
}

async function createDictionary(request) {
  // console.log('创建字典参数', request)
  const result = await new DictionaryModel(request).save()
  let response = {}
  if (result) {
    response.status = 'success'
    response.msg = '创建字典成功'
    response.data = result
  } else {
    response.status = 'error'
    response.msg = '创建字典失败'
    response.data = null
  }
  return response
}
export default {
  getDictionaryList,
  getDictionaryLangList,
  createDictionary,
}
