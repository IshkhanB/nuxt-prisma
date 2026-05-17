import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const id = data?.id
    delete data.id
    if (!data.title) delete data.title
    if (!data.content) delete data.content
    if (!data.authorId) delete data.authorId
    const post = await prisma.post.update({
      data,
      where: {
        id: +id
      }
    })
    return post
  } catch (e) {
    console.log(e)
    return null
  }
})