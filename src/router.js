/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import blog from './views/blog.vue'

Vue.use(Router)

export default new Router({
    routes: [{
      path: '/home',
      name: 'home',
      component: Home
    },{
        path: '/blog',
        name: 'blog',
        component: blog
    }]
})