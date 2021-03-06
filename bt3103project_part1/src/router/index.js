import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from"../views/About.vue";
import Login from "../views/Login.vue";
import History from "../views/History.vue";
import Register from "../views/Register.vue";


Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,

    },
    {
      path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    // () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
    path: "/history",
    name: "History",
    component: History,
    }
  ]
});

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

export default router;