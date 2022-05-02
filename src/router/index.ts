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
        ] 
    },
    
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router