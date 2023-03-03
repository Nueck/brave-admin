import { request } from '@/utils'

const api = {
  getUser: () => request.get('/user'),
  refreshToken: () => request.post('/auth/refreshToken'),
}

export const user = api
