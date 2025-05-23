import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
////import Tables from "../views/Tables.vue";
//import Billing from "../views/Billing.vue";
//import VirtualReality from "../views/VirtualReality.vue";
///import RTL from "../views/Rtl.vue";
//import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Sorteo from "../views/Sorteo.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: Dashboard,
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/sorteo/:seoLink",
    name: "Sorteo",
    component: Sorteo,
  },
  /*{
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  /*{
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },*/
  /*{
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },*/
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
