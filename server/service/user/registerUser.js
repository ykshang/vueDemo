import User from '../../models/user.js'
export default async function registerUser(user) {
  const result = await User.create(user)
  return result
}
