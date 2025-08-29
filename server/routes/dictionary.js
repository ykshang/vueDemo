import Router from 'koa-router'
import dictionaryService from '../service/dictionary.js'

const router = new Router({ prefix: '/dictionary' })

router.post('/getDictionaryList', async (ctx) => {
  const resultList = await dictionaryService.getDictionaryList(ctx.request.body)
  ctx.body = resultList
})


router.post('/createDictionary', async (ctx) => {
  // console.log('创建字典参数', ctx.request.body)
  const resultList = await dictionaryService.createDictionary(ctx.request.body)
  ctx.body = resultList
})
export default router
