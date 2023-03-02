import { getLocal, removeLocal, setLocal } from '@/utils'

const TOKEN_CODE = 'access_token'

export function getToken() {
  return getLocal(TOKEN_CODE)
}

export function setToken(token: string) {
  setLocal(TOKEN_CODE, token)
}

export function removeToken() {
  removeLocal(TOKEN_CODE)
}

export async function refreshAccessToken() {
  // try {
  //   const res: any = await user.refreshToken()
  //   if (res.code === 0)
  //     setToken(res.data.token)
  // }
  // catch {
  //   // 无感刷新，有异常也不提示
  // }
}
