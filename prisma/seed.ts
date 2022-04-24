import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const main = async () => {
  await prisma.feedback.create({
    data: {
      name: 'David',
      email: 'test@gmail.com',
      message: 'hello from seeding script',
    },
  })
}

main()
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
