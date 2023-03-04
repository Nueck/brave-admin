const blog: AuthRoute.Route = {
  name: 'blog',
  path: '/blog',
  component: 'basic',
  meta: { title: '博客管理', icon: 'mdi:library-outline', order: 2 },
  children: [
    {
      name: 'blog_article',
      path: '/blog/article',
      component: 'self',
      meta: { title: '文章', icon: 'mdi:bookmark-box-multiple-outline', requiresAuth: true }
    },
    {
      name: 'blog_creation',
      path: '/blog/creation',
      component: 'self',
      meta: { title: '创作', icon: 'mdi:pencil-box-multiple-outline', requiresAuth: true }
    }
  ]
};

export default blog;
