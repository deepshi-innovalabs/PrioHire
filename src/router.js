import { createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory,
    routes: [{
        path: "/",
        name: "home",
        component: () => import("./views/HomePage.vue")
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("./components/Dashboard/DashboardMainPage.vue")
      }
    ]
});

export default router;