import User from '../../models/user-pwd.js'
export default async function getUserList() {
  const userList = await User.find()
  return userList
}
