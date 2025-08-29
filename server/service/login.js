import UserPwdModel from '../models/user-pwd.js'
async function login(user) {
  const userList = await UserPwdModel.find(user)
  let result = {}
  if (userList.length > 0) {
    result.status = 'success'
    result.msg = '登录成功'
    result.data = userList[0]
  } else {
    result.status = 'error'
    result.msg = '登录失败'
    result.data = null
  }
  return result
}
export default {
  login,
}
