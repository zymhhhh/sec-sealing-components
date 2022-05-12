<template>
    <el-button @click="handleClick" type="primary">
        <slot></slot>
    </el-button>
    <div class="s-icon-selector-dialog-body-height">
        <el-dialog :title="title" v-model="dialogVisible">
            <div class="container">
                <div class="item" v-for="(item, index) in Object.keys(ElIcons)" 
                :key="index" 
                @click="clickItem(item)"
                >
                    <span class="icon-item">

                        <component :is="`el-icon-${toLine(item)}`"></component>

                        <span class="text">{{ item }}</span>
                    </span>
                </div>

            </div>
        </el-dialog>
    </div>

   
</template>
<script lang="ts" setup>

import { toLine } from '../../../utils'
import * as ElIcons from "@element-plus/icons-vue"
import { ref, watch } from 'vue'
import { useCopy } from '../../../hooks/useCopy';
let props = defineProps<{
    title: string,
    visible: boolean
}>()
let emits = defineEmits(['update:visible'])
let handleClick = () => {
    //console.log(props.visible)
    emits('update:visible', !props.visible)
}
let dialogVisible = ref<boolean>(props.visible)


let clickItem = (item: string) => {
    let text = `<el-icon-${toLine(item)} />`
    useCopy(text)
    // 
  // dialogVisible.value = false
}
// watch the first change of the visible
watch(() => props.visible, val => {

    dialogVisible.value = val
})

// watch the next change of the visible
watch(() => dialogVisible.value, val => {
    emits('update:visible', val)
})


</script>
<style lang="scss" scoped>
.container {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border-left: 1px solid var(--el-border-color);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

}

svg {
    height: 2em;
    width: 2em;
}

.icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
}

.item {
    text-align: center;
    color: var(--el-text-color-regular);
    height: 90px;
    border-right: 1px solid var(--el-border-color);
    border-bottom: 1px solid var(--el-border-color);
    transition: background-color var(--el-transition-duration);


}

.text {
    margin-top: 8px;
    font-size: 4px;
}
</style>