//import HelloWorld from '@/components/HelloWorld'
import Dashboard from '../components/Dashboard'
import NewEmployee from '../components/NewEmployee'
//import ViewEmployee from '../components/ViewEmployee'
import EditEmployee from '../components/EditEmployee'

import { createRouter, createWebHistory } from "vue-router"

import { getAuth } from 'firebase/auth'

const routeInfos = [
    //   {
    //     path: '/',
    //     name: 'HelloWorld',
    //     component: HelloWorld
    // }
    {
        path: '/',
        name: 'dashboard-f',
        component: Dashboard
    },
    {
        path: '/new',
        name: 'new-employee',
        component: NewEmployee
    },
    {
        path: '/edit/:employee_id',
        name: 'edit-employee',
        component: EditEmployee
    },
    // {
    //     path: '/:employee_id',
    //     name: 'view-employee',
    //     component: ViewEmployee
    // },
    {
        path: "/sign-up",
        component: () =>
            import ("../views/SignUp.vue"),
    },
    {
        path: "/sign-in",
        component: () =>
            import ("../views/SignIn.vue"),
    },
    {
        path: "/feed",
        component: () =>
            import ("../views/Feed.vue"),
        meta: {
            requiresAuth: true,
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routeInfos
})
router.beforeEach((to, from, next) => { //prevent guest access to feed page
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (getAuth().currentUser) {
            next();
        } else {
            alert("You Don't Have access");
            next("/")
        }
    } else {
        next();
    }
})
export default router;