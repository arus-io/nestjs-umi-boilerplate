export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'Welcome',
    icon: 'smile',
    component: './welcome/welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './welcome/welcome',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: 'account-settings',
    icon: 'home',
    path: '/account-settings',
    component: './account-settings',
  },
  {
    component: './404',
  },
];
