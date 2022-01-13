import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Taiwan from "../views/Taiwan.vue";
import Hertz from "../views/Hertz.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/taiwan",
    name: "Taiwan",
    component: Taiwan,
  },
  {
    path: "/hertz",
    name: "Hertz",
    component: Hertz,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
