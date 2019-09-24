import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TestTasks from '@/components/TestTasks'
import Templates from '@/components/Templates'
import MinskCoffee from '@/components/MinskCoffee'
import CoffeeShops from '@/components/CoffeeShops'
import Favourites from '@/components/Favourites'
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
    {
      path: "/templates",
      name: "Templates",
      component: Templates
    },
    {
      path: "/testtasks",
      name: "TestTasks",
      component: TestTasks
    },
    {
      path: "/minskcoffee",
      name: "MinskCoffee",
      component: MinskCoffee,
      children:[
        { path: "coffeeshops", component: CoffeeShops },
        { path: "favourites", component: Favourites },
        //{ path: "favourites", component: Beans }
      ]
    },
    {
      path: "*",
      component: NotFoundComponent
    }
  ]
});
