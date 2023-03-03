const users = {
  admin: {
    id: 1,
    name: 'Nueck',
    avatar: 'https://avatars.githubusercontent.com/u/92101954?v=4',
    email: 'nueck@outlook.com',
    role: ['admin'],
  },
}
export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          ...(users.admin),
        },
      }
    },
  },
]
