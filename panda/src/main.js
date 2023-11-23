import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引用插件
import "lib-flexible/flexible.js"

const app = createApp(App)

app.use(router)

app.mount('#app')
