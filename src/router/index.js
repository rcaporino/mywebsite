import Vue from "vue";
import VueRouter from "vue-router";
import AboutMe from "../views/AboutMe.vue";
import Education from "../views/Education.vue";
import Test1 from "../views/Test1.vue";
import Test2 from "../views/Test2.vue";Test1


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AboutMe",
    component: AboutMe
  },
  {
    path: "/education",
    name: "Education",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
    component: Education
  },
  {
    path: "/testroute1",
    name: "Test1",
    component: Test1
  },
  {
    path: "/testroute2",
    name: "Test2",
    component: Test2
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
