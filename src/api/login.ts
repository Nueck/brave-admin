import { request } from '@/utils'
import type { RequestConfig } from '~/types/axios'

const api = {
  login: (data = {}) => request.post('/login', data, { noNeedToken: true } as RequestConfig),
}

export const login = api

