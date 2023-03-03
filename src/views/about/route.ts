import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'about',
  path: '/',
  component: Layout,
  redirect: '/about',
  meta: {
    order: 101,
  },
  children: [
    {
      name: 'about',
      path: 'about',
      component: () => import('./index.vue'),
      meta: {
        title: '关于',
        icon: 'mdi:information-outline',
      },
    },
  ],
} as RouteType
