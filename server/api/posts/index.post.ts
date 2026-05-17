import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    data.authorId = +data.authorId
    const post = await prisma.post.create({
      data,
    })
    if (post) return post
  } catch (e) {
    console.log(e)
    return null
  }
})