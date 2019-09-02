import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Coffee from '@/components/Coffee'
import Templates from '@/components/Templates'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    /*{
      path: "/coffee",
      name: "Coffee",
      component: Coffee
    },*/
    {
      path: "/templates",
      name: "Templates",
      component: Templates
    },
    {
      path: "*",
      component: NotFoundComponent
    }
  ]
});
