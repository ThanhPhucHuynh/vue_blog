import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Blog from "../pages/Blog";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      guest: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: HelloWorld,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(
    "Dasd sadas",
    to.matched.some((record) => record.meta.requiresAuth),
    to.matched.some((record) => record.meta.guest)
  );

  if (to.matched.some(record => record.meta.requiresAuth) && localStorage.getItem("token") == null) {
    router.push({
      path: "login",
    })
  } else {
    next();
  }
});
export default router;
