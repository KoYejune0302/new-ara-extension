import { createApp } from 'vue'
import App from './App.vue'
// import i18n from './i18n'

import { router } from './router/index.js'

// createApp(App).use(i18n).mount('#app')

const app = createApp(App)
app.use(router)  // 라우터 사용
app.mount('#app')