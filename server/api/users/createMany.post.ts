import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const users = await prisma.user.createManyAndReturn({
      data: [
        { name: 'Sonali', email: '1sonali@prisma.io' },
        { name: 'Alex', email: '2alex@prisma.io' },
      ],
    });
    return users
  } catch (e) {
    console.log(e)
    return null
  }
})

