const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageToDo.vue')
      },

      {
        path: '/Settings',
        component: () => import('pages/PageSettings.vue')
      },

      {
        path: '/aboutUs',
        component: () => import('pages/AboutUs.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
