import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const user = await prisma.user.create({
      data,
      select: {
        id: true
      }
    })
    if (user) return user
  } catch (e) {
    console.log(e)
    return null
  }
})