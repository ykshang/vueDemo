import Router from 'koa-router'

const router = new Router({ prefix: '/user' })
import userService from '../service/user.js'
import loginService from '../service/login.js'

router.get('/userList', async (ctx) => {
  const userList = await userService.getUserList()
  ctx.body = userList
})
router.post('/register', async (ctx) => {
  const res = await userService.registerUser(ctx.request.body)
  ctx.body = {
    msg: '注册成功',
    data: res,
  }
})
router.post('/login', async (ctx) => {
  console.log('1')
  const res = await loginService.login(ctx.request.body)
  ctx.body = res
})
export default router
