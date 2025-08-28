// api/user.ts

import { post } from '~/config/axios'

const api = {
  login: '/api/user/login',
  users: '/api/user/info',
  register: '/api/user/register',
}
// 登录
export function login(params: any) {
  // console.log('登录参数', params)
  return post(api.login, params).then((res) => {
    // console.log('登录成功', res)
    return Promise.resolve(res)
  })
}
// 注册
export function register(params: any) {
  // console.log('注册参数', params)
  return post(api.register, params).then((res) => {
    // console.log('注册成功', res)
    return Promise.resolve(res)
  })
}
// 登录

// 获取用户信息
