import Vue from "vue";
import VueRouter from "vue-router";
import AboutMe from "../views/AboutMe.vue";
import Education from "../views/Education.vue";
import ContactMe from "../views/ContactMe.vue";
import Projects from "../views/Projects.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AboutMe",
    component: AboutMe
  },
  {
    path: "/educationandskills",
    name: "Education",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
    component: Education
  },
  {
    path: "/contactme",
    name: "Contact Me",
    component: ContactMe
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
