import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/choose-icon',
        component: () => import('@/views/ChooseIcon.vue')
      },
      {
        path: '/choose-area',
        component: () => import('@/views/ChooseArea.vue')
      },
      {
        path: '/menu',
        component: () => import('@/views/Menu.vue')
      },
      {
        path: '/table',
        component: () => import('@/views/Table.vue')
      },
      {
        path: '/form',
        component: () => import('@/views/Form.vue')
      },
      {
        path: '/time',
        component: () => import('@/views/ChooseTime.vue')
      },
      {
        path: '/progress',
        component: () => import('@/views/Progress.vue')
      },
      {
        path: '/choose-city',
        component: () => import('@/views/ChooseCity.vue')
      },
      {
        path: '/form',
        component: () => import('@/views/Form.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router