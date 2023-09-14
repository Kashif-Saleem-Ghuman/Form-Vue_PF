import { createRouter, createWebHistory } from "vue-router";

import SignUp from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
const routes = [
  {
    path: "/",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LoginForm",
    component: <LoginForm title="LOGIN" />,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
