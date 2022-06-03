import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      first_name: `Taro`,
      last_name: `Admin`,
      role: 'ADMIN',
    },
  })
  await prisma.user.create({
    data: {
      first_name: `Taro`,
      last_name: `User`,
      role: 'USER',
    },
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
