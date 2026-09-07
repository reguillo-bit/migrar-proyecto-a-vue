import { createRouter, createWebHistory } from "vue-router";
import LoginViews from "../views/LoginViews.vue";
import InterfazView from "@/views/InterfazVew.vue";
import RastreoView from "@/views/RastreoView.vue";

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
  {
    path: "/RastreoView",
    name: "RastreoView",
    component: RastreoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
