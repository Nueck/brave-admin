const blog: AuthRoute.Route = {
  name: 'blog',
  path: '/blog',
  component: 'basic',
  meta: {
    title: '博客管理',
    icon: 'mdi:library-outline',
    order: 2,
    requiresAuth: true,
    permissions: ['admin', 'super', 'user']
  },
  children: [
    {
      name: 'blog_article',
      path: '/blog/article',
      component: 'self',
      meta: {
        title: '文章',
        icon: 'mdi:bookmark-box-multiple-outline',
        requiresAuth: true,
        permissions: ['admin', 'super', 'user']
      }
    },
    {
      name: 'blog_category',
      path: '/blog/category',
      component: 'self',
      meta: {
        title: '类别',
        icon: 'bx:category',
        requiresAuth: true,
        permissions: ['admin', 'super', 'user']
      }
    },
    {
      name: 'blog_message',
      path: '/blog/message',
      component: 'self',
      meta: {
        title: '留言',
        icon: 'mdi:message-badge-outline',
        requiresAuth: true,
        permissions: ['admin', 'super', 'user']
      }
    },
    {
      name: 'blog_album',
      path: '/blog/album',
      component: 'self',
      meta: { title: '相册', icon: 'bx:photo-album', requiresAuth: true, permissions: ['admin', 'super', 'user'] }
    },
    {
      name: 'blog_skin',
      path: '/blog/skin',
      component: 'self',
      meta: {
        title: '皮肤',
        icon: 'ant-design:skin-outlined',
        requiresAuth: true,
        permissions: ['admin', 'super', 'user']
      }
    }
  ]
};

export default blog;
