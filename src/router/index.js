import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '@/views/Tasks.vue'
import Task from '@/views/Task.vue'
import New from '@/views/New.vue'
import Page404 from '@/views/Page404.vue'

const routes = [
  {
    path: '/tasks',
    alias: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/:404(.*)',
    name: 'Page404',
    component: Page404
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
