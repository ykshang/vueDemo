import Router from 'koa-router'
const router = new Router({ prefix: '/users' })
import { getUserList } from '../service/user.js'

router.get('/userList', async (ctx) => {
  const userList = await getUserList();
  console.log(userList)
  ctx.body = userList
})
router.get('/register', async (ctx) => {
  ctx.body = userList
})
router.get('/:id', async (ctx) => {
  ctx.body = `用户ID: ${ctx.params.id}`
})

export default router
