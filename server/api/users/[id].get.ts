import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (id) {
      const user = await prisma.user.findUnique({
        include: {
          profile: true
        },
        where: {
          id: +id
        }  
      })
      if (user) return user
      return {error :'no user'}
    }
  } catch (e) {
    console.log(e)
    return null
  }
})