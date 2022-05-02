import {App} from 'vue'
import areaSelector from './areaSelector'
import iconSelector from './iconSelector'

const component = [
    areaSelector,
    iconSelector
]
export default {
    install(app:App) {
        component.map(item => {
            app.use(item)
        })
    }
}