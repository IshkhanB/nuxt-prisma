import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const email = data?.email
    delete data.email
    const user = await prisma.user.update({
      data,
      select: {
        id: true
      },
      where: {
        email
      }
    })
    return user
  } catch (e) {
    console.log(e)
    return null
  }
})