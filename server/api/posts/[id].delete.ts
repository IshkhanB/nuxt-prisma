import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (id) {
      const post = await prisma.post.delete({
        where: {
          id: +id
        }
      })
      return post
    }
    return null
  } catch (e) {
    console.log(e)
    return null
  }
})
