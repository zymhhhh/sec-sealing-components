import { App } from 'vue'
import citySelector from './src/index.vue'
export default {
    install(app: App) {
        app.component('city-selector', citySelector)
    }
}