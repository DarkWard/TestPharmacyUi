import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/patient',
            component: () => import('@/views/patients/patient-list.vue')
            
        },
        {
            path: '/pharmacies',
            component: () => import('@/views/pharmacies.vue')
        },
        {
            path: '/create-patient',
            component: () => import('@/views/patients/create.vue')
        },
    ]
})