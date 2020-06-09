import Vue from 'vue';
import Router from 'vue-router';

// auth
import Login from './components/auth/Login.vue';
import Logout from './components/auth/Logout.vue';

// views
import Edit from './components/Edit.vue';
import Videos from './components/Videos.vue';
import Admin from './components/Admin.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'videos',
        component: Videos,
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
        path: '/edit/:id',
        name: 'Edit',
        component: Edit,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta: {
            requiresAuth: true,
        }
    },

]

export default routes