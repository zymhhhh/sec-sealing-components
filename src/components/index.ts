import {App} from 'vue'
import areaSelector from './areaSelector'
import iconSelector from './iconSelector'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDay from './chooseDay'
import citySelector from './citySelector'
const component = [

    areaSelector,
    iconSelector,
    trend,
    notification,
    list,
    menu,
    progress,
    chooseTime,
    chooseDay,
    citySelector
]
export default {
    install(app:App) {
        component.map(item => {
            app.use(item)
        })
    }
}