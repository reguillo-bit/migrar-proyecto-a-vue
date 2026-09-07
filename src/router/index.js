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
    // Metemos la ruta aquí adentro para que herede el menú fijo
    children: [
      {
        path: "/rastreo", 
        name: "rastreo",
        component: () => import("../views/RastreoView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
