import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import About from "../views/About.vue";
//import SwipeView from "../views/SwipeView.vue";
import SwipeableCards from "../components/SwipeableCards.vue";
//import HelloWorld from "../components/HelloWorld.vue";
import Profile from "../components/Profile.vue";
import StudyGroupMsg from "../components/StudyGroupMsg.vue";
import Matches from "../components/Matches.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: SwipeableCards
  },
  {
    path: "/about",
    name: "About",
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
      //import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/swipe",
    name: "SwipeView",
    component: SwipeableCards
  },
  {
    path: "/groups",
    name: "StudyView",
    component: StudyGroupMsg
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/matches",
    name: "Matches",
    component: Matches
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;