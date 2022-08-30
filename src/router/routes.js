
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    component: () => import('layouts/Sr_After.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
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
