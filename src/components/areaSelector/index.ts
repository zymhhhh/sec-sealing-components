import { App } from 'vue'
import areaSelector from './src/index.vue'
export default {
    install(app: App) {
        app.component('area-selector', areaSelector)
    }
}