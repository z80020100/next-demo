import { enumType, objectType, extendType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('first_name')
    t.string('last_name')
    t.field('role', { type: Role })
  },
})

const Role = enumType({
  name: 'Role',
  members: ['USER', 'ADMIN'],
})

export const UsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('Users', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany()
      },
    })
  },
})
