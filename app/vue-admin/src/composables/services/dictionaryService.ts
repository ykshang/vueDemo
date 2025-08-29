// api/user.ts

import { post } from '~/config/axios'
// 获取字典列表
export function getDictionaryList(params?: any) {
  // console.log('注册参数', params)
  return post('/api/dictionary/getDictionaryList', params).then((res) => {
    // console.log('注册成功', res)
    return Promise.resolve(res)
  })
}
export function createDictionary(params: any) {
  // console.log('创建字典参数', params)
  return post('/api/dictionary/createDictionary', params).then((res) => {
    // console.log('创建字典成功', res)
    return Promise.resolve(res)
  })
}
export default {
  getDictionaryList,
  createDictionary,
}
