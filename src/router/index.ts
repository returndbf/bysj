import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";

const Main = () => import("../views/display/Main.vue")
const TouristRoute = () => import("../views/display/TouristRoute.vue")
const Recommend = () => import("../views/display/Recommend.vue")
const Personal = () => import("../views/display/Personal.vue")
const Shopping = () => import("../views/display/Shopping.vue")
const Food = () => import("../views/display/Food.vue")
const ArticleDetail = () => import("../views/display/ArticleDetail.vue")
const Info = () => import("../views/display/Info.vue")

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/Main',
    },
    {
        path: '/Main',
        component: Main,
    },
    {
        path: '/TouristRoute',
        component: TouristRoute,
    },
    {
        path: '/Recommend',
        component: Recommend,
    },
    {
        path: '/Personal',
        component: Personal,
    },
    {
        path: '/Shopping',
        component: Shopping,
    },
    {
        path: '/Food',
        component: Food,
    },
    {
        path: '/Info',
        component: Info,
    },
    {
        path: '/ArticleDetail/:id',
        name:   'ArticleDetail',
        component: ArticleDetail,
    },




]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
