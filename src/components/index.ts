import {App} from 'vue'
import areaSelector from './areaSelector'
import iconSelector from './iconSelector'
import trend from './trend'
const component = [

    areaSelector,
    iconSelector,
    trend
]
export default {
    install(app:App) {
        component.map(item => {
            app.use(item)
        })
    }
}