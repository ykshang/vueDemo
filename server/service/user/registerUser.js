import User from '../../models/user-pwd-model.js'
export default async function registerUser(user) {
  const result = await User.create(user)
  return result
}
