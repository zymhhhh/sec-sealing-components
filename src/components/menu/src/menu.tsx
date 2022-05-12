import { defineComponent, PropType ,useAttrs} from "vue";
import { toLine } from "../../../utils";
import { menuItem } from "./type";
import * as Icons from '@element-plus/icons'
import './styles/index.scss'
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<menuItem[]>,
      required: true,

    },
    defaultActive: {
      type: String,
      default: "",
    },
    router: {
      type: Boolean,
      default: false,
    },
    name: {
        type: String,
        default: 'name',
    },
    index: {
        type: String,
        default: 'index',
    },
    icon: {
        type: String,
        default: 'icon',
    },
    children: {
        type: String,
        default: 'children',
    },
},
    setup(props, ctx) {
        
        // return jsx
        let attrs = useAttrs()
        let renderMenu = (data: any[]) => {
          return data.map((item: any) => {
            // icon
            item.i = (Icons as any)[item[props.icon!]]
            // sub-menu slot
            let slots = {
              title: () => {
                return <>
                  <item.i />
                  <span>{item[props.name]}</span>
                </>
              }
            }
            // render children
            if (item[props.children]! && item[props.children]!.length) {
              return (
                <el-sub-menu index={item[props.index]} v-slots={slots}>
                  {renderMenu(item[props.children]!)}
                </el-sub-menu>
              )
            }
            // render normal menu 
            return (
              <el-menu-item index={item[props.index]}>
                <item.i />
                <span>{item[props.name]}</span>
              </el-menu-item>
            )
          })
        }
        //let attrs = useAttrs()
        return () => {
          return (
            <el-menu
              class="menu-icon-svg"
              default-active={props.defaultActive}
              router={props.router}
              {...attrs}
            >
              {renderMenu(props.data)}
            </el-menu>
          )
        }
      }

  });
