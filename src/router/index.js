import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Home.vue");
    },
  },
  {
    path: "/login",
    name: "Login",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Login.vue");
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Dashboard.vue");
    },
    children: [
      {
        path: "table",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/dashboard/TableUser.vue"
          );
        },
      },
      {
        path: "form",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/dashboard/FormUser.vue"
          );
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
