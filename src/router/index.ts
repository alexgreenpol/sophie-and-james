import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "BvrCheckoutPageNotFound",
    component: () => import("@/pages/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
