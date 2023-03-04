const information: AuthRoute.Route = {
  name: 'information',
  path: '/information',
  component: 'self',
  meta: {
    title: '个人信息',
    icon: 'mdi:library-outline',
    order: 0,
    requiresAuth: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin', 'user']
  }
};

export default information;
