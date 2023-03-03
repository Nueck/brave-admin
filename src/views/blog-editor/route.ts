import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'blog-editor',
  path: '/blog-editor',
  component: Layout,
  redirect: '/blog-editor/editor',
  meta: {
    title: '博客编辑',
    icon: 'mdi:note-edit-outline',
    role: ['admin', 'editor'],
    requireAuth: true,
    order: 4,
  },
  children: [
    {
      name: 'editor',
      path: 'editor',
      component: () => import('./editor/index.vue'),
      meta: {
        title: '管理',
        icon: 'material-symbols:bookmark-manager-outline',
        requireAuth: true,
        role: ['admin', 'editor'],
      },
    },
    {
      name: 'editor1',
      path: 'editor1',
      component: () => import('./editor/index.vue'),
      meta: {
        title: '编辑',
        icon: 'icon-park-outline:editor',
        requireAuth: true,
        role: ['admin', 'editor'],
      },
    },
  ],
} as RouteType
