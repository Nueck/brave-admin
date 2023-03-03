import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Dashboard',
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  meta: {
    order: 1,
  },
  children: [
    {
      name: 'dashboard',
      path: 'dashboard',
      component: () => import('./index.vue'),
      meta: {
        title: '指示版',
        icon: 'mdi:asterisk-circle-outline',
      },
    },
  ],
} as RouteType
