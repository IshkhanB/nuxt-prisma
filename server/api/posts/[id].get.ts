import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (id) {
      const post = await prisma.post.findUnique({
        where: {
          id: +id
        }  
      })
      if (post) return post
      return {error :'no post'}
    }
  } catch (e) {
    console.log(e)
    return null
  }
})