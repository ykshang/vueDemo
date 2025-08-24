import User from '../../models/UserPwd.js'
export default async function insertUser(user) {
  const result = await new User(user).save()
  return result
}
