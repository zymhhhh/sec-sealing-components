<template>
 <el-popover
    placement="bottom"
    :width="300"
    trigger="click"
  >
  <template #default>
      <slot></slot>
  </template>
    <template #reference>
        <el-badge style="cursor: pointer;" :value="value" :isDot="isDot" :max="max">
        <component :is="`el-icon-${toLine(icon)}`"></component>
    </el-badge>
    </template>
  </el-popover>
  
</template>
<script lang='ts' setup>
import { toLine } from '../../../utils'
let props = defineProps({
    value: {
        type: [String, Number],
        default: ''
    },
    max:{
        type: Number,
        default: 1000
    },
    isDot: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: 'Bell'
    }
})
</script>
<style lang='scss' scoped>
</style>