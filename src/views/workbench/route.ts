import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Me',
  path: '/',
  component: Layout,
  redirect: '/world',
  meta: {
    order: 0,
  },
  children: [
    {
      name: 'world',
      path: 'world',
      component: () => import('./index.vue'),
      meta: {
        title: '个人信息',
        icon: 'mdi:home',
      },
    },
  ],
} as RouteType
