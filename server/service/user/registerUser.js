import User from '../../models/user-pwd.js'
export default async function registerUser(user) {
  const result = await User.create(user)
  return result
}
