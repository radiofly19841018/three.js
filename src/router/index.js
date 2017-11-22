import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/demo1',
      name: 'demo1',
      component: resolve => require(['@/views/demo1.vue'], resolve)
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: resolve => require(['@/views/demo2.vue'], resolve)
    }
  ]
});
