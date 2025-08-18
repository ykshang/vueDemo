import Router from 'koa-router'

const router = new Router({ prefix: '/user' })
import { getUserList, registerUser, login } from '../service/user.js'

router.get('/userList', async (ctx) => {
  const userList = await getUserList()
  console.log(userList)
  ctx.body = userList
})
router.post('/register', async (ctx) => {
  const res = await registerUser(ctx.request.body)
  ctx.body = {
    msg: '注册成功',
    data: res,
  }
})
router.post('/login', async (ctx) => {
  const res = await login(ctx.request.body)
  ctx.body = res
})
export default router
