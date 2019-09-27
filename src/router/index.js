import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TestTasks from '@/components/TestTasks'
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
      path: "*",
      component: NotFoundComponent
    }
  ]
});