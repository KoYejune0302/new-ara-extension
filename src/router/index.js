import { createRouter, createWebHistory } from 'vue-router'

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)
import Main from '/src/components/Main.vue'
import NotFound from '/src/views/NotFound.vue'
import { auth, authGuard } from './auth.js'

// 라우터 설계
const routes = [
    { 
        path: '/',
        name: 'main',
        component:Main,
        beforeEnter: authGuard
    },
    {
        path: '/404',
        name: 'not-found',
        component: NotFound
    }
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}
