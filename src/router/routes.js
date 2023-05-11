
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/todoList.vue') },
      { path: '/stat', component: () => import('src/pages/todoStat.vue') },
      { path: '/faq', component: () => import('src/pages/FAQ.vue') },
      { path: '/contacts', component: () => import('src/pages/contacts.vue') },
      { path: '/about', component: () => import('src/pages/About.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
