import User from '../../models/UserPwd.js'
export default async function login(user) {
  const userList = await User.find(user)
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
