import { resolveToken } from '../utils'

const users = {
  admin: {
    id: 1,
    name: 'Nueck',
    avatar: 'https://avatars.githubusercontent.com/u/92101954?v=4',
    email: 'nueck@outlook.com',
    role: ['admin'],
  },
  guest: {
    id: 3,
    name: '访客(guest)',
    avatar: 'https://assets.qszone.com/images/avatar.jpg',
    role: [],
  },
}
export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }) => {
      const token = resolveToken(headers?.authorization)
      return {
        code: 0,
        data: {
          ...(users[token] || users.guest),
        },
      }
    },
  },
]
