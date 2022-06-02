//import HelloWorld from '@/components/HelloWorld'
import Dashboard from '../components/Dashboard'
import NewEmployee from '../components/NewEmployee'
import ViewEmployee from '../components/ViewEmployee'
import EditEmployee from '../components/EditEmployee'

import { createRouter, createWebHistory } from "vue-router"

import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
    {
        path: '/:employee_id',
        name: 'view-employee',
        component: ViewEmployee
    },
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
    //if i was in feed and try relaod i treat as un loginin then it redirect me to root with alert to solve this issue we will write the following code:
const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListerner = onAuthStateChanged(getAuth(), (user) => {
            removeListerner();
            resolve(user);
        }, reject);
    });
}
router.beforeEach(async(to, from, next) => { //prevent guest access to feed page
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            console.log("You Don't Have access")
            alert("You Don't Have access");
            next("/");
        }
    } else { //includes all routes theat have not requiresAuth then will prevent access if you are not auth
        //alert("try access");
        next();
    }
})
export default router;