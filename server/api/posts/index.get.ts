import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const posts = await prisma.post.findMany({})
    return posts
  } catch(e) {
    console.log(e)
    return []
  }
})