import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo1',
      component: resolve => require(['@/views/demo1.vue'], resolve)
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: resolve => require(['@/views/demo2.vue'], resolve)
    },
    {
      path: '/test2',
      name: 'test2',
      component: resolve => require(['@/views/test2.vue'], resolve)
    },
    {
      path: '/test3',
      name: 'test3',
      component: resolve => require(['@/views/test3.vue'], resolve)
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: resolve => require(['@/views/demo4.vue'], resolve)
    }
  ]
});
