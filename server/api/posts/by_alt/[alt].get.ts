import { prisma } from '../../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const alt = getRouterParam(event, 'alt')
    if (alt) {
      const post = await prisma.post.findFirst({
        where: {
          data: {
            path: ['images'],
            array_contains: [{ alt }]
          }
        }
      })
      if (post) return post
      return { error: 'no post' }
    }
  } catch (e) {
    console.log(e)
    return 'no'
  }
})