// import Vue from "vue";
import { createRouter, createWebHistory } from 'vue-router';

// Vue.use(Router);


const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import("../components/HomePage")
  },
  {
    path: '/LoginPage/',
    component: () => import("../components/LoginPage")
  },
  {
    path: '/RegisterPage/',
    component: () => import("../components/RegisterPage")
  },
  {
    path: '/Thread/:id',
    component: () => import("../components/ThreadPage")
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    component: () => import("../components/NotFound")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;