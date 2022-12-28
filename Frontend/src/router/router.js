// import Vue from "vue";
import { createRouter, createWebHistory } from 'vue-router';

// Vue.use(Router);

const routes = [
  {
      path: '/',
      component: () => import("../components/HelloWorld")
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