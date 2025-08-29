import Router from 'koa-router'
import dictionaryService from '../service/dictionary.js'

const router = new Router({ prefix: '/dictionary' })

router.get('/list', async (ctx) => {
  const resultList = await dictionaryService.getDictionaryList()
  ctx.body = resultList
})

export default router
