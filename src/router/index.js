import Vue from "vue";
import VueRouter from "vue-router";
import AboutMe from "../views/AboutMe.vue";
import Education from "../views/Education.vue";
import ContactMe from "../views/ContactMe.vue";
import Projects from "../views/Projects.vue";
import Vuejs from "../views/Vuejs.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AboutMe",
    component: AboutMe,
    meta: {
      title: "rcaporino.com - About Me"
    }
  },
  {
    path: "/educationandskills",
    name: "Education",
    component: Education,
    meta: {
      title: "rcaporino.com - Education and Skills"
    }
  },
  {
    path: "/contactme",
    name: "ContactMe",
    component: ContactMe,
    meta: {
      title: "rcaporino.com - Contact Me"
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: "rcaporino.com - Projects"
    }
  },
  { 
    path: "/vuejs",
    name: "Vuejs",
    component: Vuejs,
    meta: {
      title: "rcaporino.com - Vuejs"
    }
  },
  // {
  //   path: '*', redirect: {name: 'AboutMe'}
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

//credit to https://alligator.io/vuejs/vue-router-modify-head/
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
