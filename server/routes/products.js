import Router from 'koa-router'
const router = new Router({ prefix: '/products' })

router
  .get('/', async (ctx) => {
    ctx.body = '商品列表'
  })
  .post('/', async (ctx) => {
    ctx.body = '创建商品'
  })

export default router
