// api/user.ts

import { post } from '@/util/axios'
import type { RegisterForm } from '@/types/user'

const api = {
  login: '/api/user/login',
  users: '/api/user/info',
  register: '/api/user/register',
}
// 注册
export const register = (params: RegisterForm) => {
  // console.log('注册参数', params)
  return post(api.register, params).then((res) => {
    // console.log('注册成功', res)
    return Promise.resolve(res)
  })
}
//登录

//获取用户信息
