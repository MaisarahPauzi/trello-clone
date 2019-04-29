require('./bootstrap');
import Vue          from 'vue'
import VueRouter    from 'vue-router'

Vue.use(VueRouter)

import App          from './views/App'
import Dashboard    from './views/Dashboard'
import Login        from './views/Login'
import Register     from './views/Register'
import Home         from './views/Welcome'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});