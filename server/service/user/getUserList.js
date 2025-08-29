import User from '../../models/user-pwd-model.js'
export default async function getUserList() {
  const userList = await User.find()
  return userList
}
