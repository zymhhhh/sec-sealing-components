import { toLine } from './utils/index';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import ELementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)
// global register icons loading needs time
for(let i in Icons) {

    app.component(`el-icon-${toLine(i)}`,(Icons as any)[i])
}
app.use(router).use(ELementPlus)
app.mount('#app')
