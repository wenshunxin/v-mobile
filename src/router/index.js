import Vue from 'vue'
import Router from 'vue-router'

import home from "../components/home.vue"
import mine from "../components/mine.vue";
import news from "../components/news.vue";
import publish from "../components/publist.vue";
import homepage from "../components/homepage.vue"
import content from "../components/content.vue"
import user from "../components/user.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/home/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/home/news',
      name: 'news',
      component: news
    },
    {
      path: '/home/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/home',
      name: 'homepage',
      component: homepage
    },{
      path:"/home/content",
      name:"content",
      component:content
    },
    {
      path:"/home/user",
      name:"user",
      component:user
    }
  //   {
  //     path: '/vuecommunitytest/personal',
  //     name: 'personal',
  //     component: personal
  //   },
  //   {
  //     path: '/vuecommunitytest/message',
  //     name: 'message',
  //     component: message
  //   }
  ]
})
