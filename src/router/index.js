import { createRouter, createWebHistory } from "vue-router";
import LoginViews from "../views/LoginViews.vue";
import InterfazView from "@/views/InterfazVew.vue";

const routes = [
  {
    path: "/",
    name: "LoginViews",
    component: LoginViews,
  },
  {
    path: "/InterfazView",
    name: "InterfazView",
    component: InterfazView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
