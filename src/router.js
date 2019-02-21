import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      title: 'davidmonroeparker.com',
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import(/* webpackChunkName: "resume" */ './views/resume.vue'),
      title: 'Resume',
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog" */ './views/blog.vue'),
      title: 'Blog',
    },
    {
      path: '/notebooks',
      name: 'notebooks',
      component: () => import(/* webpackChunkName: "notebooks" */ './views/notebooks.vue'),
      title: 'Notebooks',
    },
  ],
});
