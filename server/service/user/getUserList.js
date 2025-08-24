import User from '../../models/UserPwd.js'
export default async function getUserList() {
  const userList = await User.find()
  return userList
}
