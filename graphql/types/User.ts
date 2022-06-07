import { enumType, objectType } from 'nexus'

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
