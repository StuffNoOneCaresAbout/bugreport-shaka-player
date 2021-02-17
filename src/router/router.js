import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/watch',
    name: 'Watch',
    component: () => import('../components/WatchVideo.vue')
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
