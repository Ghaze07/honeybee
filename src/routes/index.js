import { createRouter, createWebHistory  } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            name: 'home', 
            component: () => import('../pages/TheHome.vue') 
        },
        { 
            path: '/tasks', 
            name: 'tasks',
            component: () => import('../pages/TheTasks.vue') 
        },
    ],
    linkActiveClass: 'active'
});

export default router;