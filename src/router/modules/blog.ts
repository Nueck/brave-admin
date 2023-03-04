const blog: AuthRoute.Route = {
  name: 'blog',
  path: '/blog',
  component: 'basic',
  meta: { title: '博客管理', icon: 'mdi:library-outline', order: 2 },
  children: [
    {
      name: 'blog_manage_article',
      path: '/blog/manage/article',
      component: 'self',
      meta: { title: '文章', icon: 'mdi:bookmark-box-multiple-outline' }
    },
    {
      name: 'blog_manage_creation',
      path: '/blog/manage/creation',
      component: 'self',
      meta: { title: '创作', icon: 'mdi:pencil-box-multiple-outline' }
    }
  ]
};

export default blog;
