import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Sys',
  path: '/system',
  component: Layout,
  redirect: '/system/role',
  meta: {
    title: '博客管理',
    icon: 'grommet-icons:user-manager',
    role: ['admin'],
    requireAuth: true,
    order: 3,
  },
  children: [
    {
      name: 'role',
      path: 'role',
      component: () => import('./role/index.vue'),
      meta: {
        title: '用户管理',
        icon: 'ic:outline-people-alt',
        role: ['admin'],
        requireAuth: true,
      },
    },
    {
      name: 'role1',
      path: 'role1',
      component: () => {},
      meta: {
        title: '皮肤管理',
        icon: 'ant-design:skin-outlined',
        role: ['admin'],
        requireAuth: true,
      },
    },
  ],
} as RouteType
