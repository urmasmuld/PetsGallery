import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewPet from "../views/NewPet.vue";
import EditPet from "../views/EditPet.vue";
// const NewPet = () => import('../views/NewPet.vue')
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { auth: false }
  },
  { 
    path: '/view/:userId/AddNew', 
    name: "NewPet",
    component: NewPet 
  },
  { 
    path: '/view/Edit/:pet_id', 
    name: "EditPet",
    component: EditPet,
    props: (route) => ({ pet_name: route.query.pet_name }),
    meta: { auth: true }
  },
  {
    path: "/view/:userId",
    name: "detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/View.vue"),
      meta: { auth: false }
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
  // console.log("dsdsds");
  // next();
});

export default router;
