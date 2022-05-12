import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Container,
        children: [
            {        
                path: '/',
                component: Home
            },
            {        
                path: '/iconSelector',
                component: () => import('../views/iconSelector/index.vue')
            },
            {        
                path: '/areaSelector', 
                component: () => import('../views/areaSelector/index.vue')
            },
            {        
                path: '/trend', 
                component: () => import('../views/trend/index.vue')
            },
            {        
                path: '/notification', 
                component: () => import('../views/notification/index.vue')
            },
            {        
                path: '/menu', 
                component: () => import('../views/menu/index.vue')
            },
            {        
                path: '/progress', 
                component: () => import('../views/progress/index.vue')
            },
            {        
                path: '/chooseTime', 
                component: () => import('../views/chooseTime/index.vue')
            },
            {        
                path: '/citySelector', 
                component: () => import('../views/citySelector/index.vue')
            },
        ] 
    },
    
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router