import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import ELementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router).use(ELementPlus)
app.mount('#app')
