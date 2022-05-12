import { App } from 'vue'
import chooseDay from './src/index.vue'
export default {
    install(app: App) {
        app.component('s-day', chooseDay)
    }
}