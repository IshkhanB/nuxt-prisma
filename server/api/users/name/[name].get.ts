import { prisma } from '../../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const name = getRouterParam(event, 'name')
    if (name) {
      const user = await prisma.user.findFirst({
        include: {
          profile: true
        },
        where: {
          name
        }
      })
      if (user) return user
      return { error: 'no user' }
    }
  } catch (e) {
    console.log(e)
    return null
  }
})