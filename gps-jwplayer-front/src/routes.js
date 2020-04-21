import Vue from 'vue';
import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Logout from './components/auth/Logout.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: {
            requiresVisitor: true,
        }
    },

]

export default routes