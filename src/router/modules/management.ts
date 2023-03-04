const management: AuthRoute.Route = {
  name: 'management',
  path: '/management',
  component: 'basic',
  children: [
    {
      name: 'management_user',
      path: '/management/user',
      component: 'self',
      meta: {
        title: '用户管理',
        requiresAuth: true,
        icon: 'ic:round-manage-accounts'
      }
    }
  ],
  meta: {
    title: '系统管理',
    icon: 'carbon:cloud-service-management',
    order: 9
  }
};

export default management;
