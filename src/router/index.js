import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Coffee from '@/components/Coffee'
import Templates from '@/components/Templates'
import Bootstrap from '@/components/Bootstrap'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/bootstrap',
			name: 'Bootstrap',
			component: Bootstrap
		},
		{
			path: '/coffee',
			name: 'Coffee',
			component: Coffee
		},
		{
			path: '/templates',
			name: 'Templates',
			component: Templates
		}
	]
})
