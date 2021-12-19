import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewPet from "../views/NewPet.vue";
import EditPet from "../views/EditPet.vue";
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import ForgotPassword from '../views/ForgotPassword.vue';

// const NewPet = () => import('../views/NewPet.vue')
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    props: (route) => ({ pet_name: route.query.pet_name })   
  },
  {
    path: "/view/:userId",
    name: "detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/View.vue"),
  },
  {
    path: '/signup',
    name: 'Signup',
    // component: () => import('../components/Signup.vue')
    component: Signup,
  },
  {
    path: '/login',
    name: 'Login',
    // component: () => import('../components/Login.vue')
    component: Login,
  },
  {
    path: '/forgot-password',
    name: 'Forgot-password',
    component: ForgotPassword,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

