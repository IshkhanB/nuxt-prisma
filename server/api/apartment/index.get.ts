import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const users = await prisma.user.findMany({
      // select: {
      //   id: true,
      //   email: true,
      //   role: true,
      //   name: true,
      //   posts: {
      //     select: {
      //       id: true,
      //       title: true
      //     }
      //   }
      // },
      // include: {
      //   posts: {
      //     select: {
      //       id: true
      //     }
      //   },
      //   profile: true
      // },
      // where: {
      //   id: {
      //     in: [1,2]
      //   }
      // },
      // orderBy: {
      //   id: 'desc'
      // },
      // skip:1,
      // take:1,
      // distinct: ['email']
    })
    return users
  } catch(e) {
    console.log(e)
    return []
  }
})