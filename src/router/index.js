import Vue from "vue";
import Router from "vue-router";
//import Home from "../views/Home.vue";
import About from "../views/About.vue";
//import SwipeView from "../views/SwipeView.vue";
import SwipeableCards from "../components/SwipeableCards.vue";
//import HelloWorld from "../components/HelloWorld.vue";
import Profile from "../components/Profile.vue";
import StudyGroupMsg from "../components/StudyGroupMsg.vue";
import Matches from "../components/Matches.vue";
import Ping from '../components/Ping.vue';
import Students from '../components/Student.vue';

Vue.use(Router);

const routes = [
  {
    path: '/students',
    name: 'Students',
    component: Students,
  },
  {
    path: "/ping",
    name: "Ping",
    component: Ping
  },
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

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;