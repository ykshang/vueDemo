import UserModel from '../models/user-pwd.js'
async function getUserList() {
  const userList = await UserModel.find()
  return userList
}
async function insertUser(user) {
  const result = await new UserModel(user).save()
  return result
}
async function registerUser(user) {
  const result = await UserModel.create(user)
  return result
}
export default {
  getUserList,
  insertUser,
  registerUser,
}
