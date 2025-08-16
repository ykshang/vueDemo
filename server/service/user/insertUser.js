import User from '../../models/user.js'
export default async function insertUser(user) {
  const result = await new User(user).save()
  return result
}
