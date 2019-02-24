import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import Resume from './views/resume.vue';
import Blog from './views/blog.vue';
import Notebooks from './views/notebooks.vue';

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
      component: Resume,
      title: 'Resume',
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      title: 'Blog',
    },
    {
      path: '/notebooks',
      name: 'notebooks',
      component: Notebooks,
      title: 'Notebooks',
    },
  ],
});
