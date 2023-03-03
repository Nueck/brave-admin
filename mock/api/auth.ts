export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: {
          token: 'admin',
        },
      }
    },
  },
]
