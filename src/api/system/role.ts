import { request } from '@/utils'
/**
 * @description: 角色列表
 */
export function getRoleList() {
  return request.get('/role/list')
}

