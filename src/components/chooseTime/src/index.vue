<template >
<div style="display: flex;">
    <div style="margin-right:20px;">
        <el-time-select v-model="startTime" :min-time="startTime" :placeholder="startPlaceholder"
          v-bind="$attrs.startOption"  :start="startTimeStart" :end="startTimeEnd" :step="startTimeStep"></el-time-select>
    </div>

    <div>
        <el-time-select v-model="endTime" :min-time="startTime" :placeholder="endPlaceholder" :start="endTimeStart"
         v-bind="$attrs.endOption" :disabled="endTimeDisabled"  :end="endTimeEnd"  :step="endTimeStep"></el-time-select>
    </div>
</div>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue'
let props = defineProps({
    startPlaceholder: {
        type: String,
        default: 'Start Time'
    },
    startTimeStart: {
        type: String,
        default: '09:00'
    },
    startTimeStep: {
        type: String,
        default: '00:30'
    },
    startTimeEnd: {
        type: String,
        default: '24:00'
    },
    endPlaceholder: {
        type: String,
        default: 'End Time'
    },
    endTimeStart: {
        type: String,
        default: '09:00'
    },
    endTimeStep: {
        type: String,
        default: '00:30'
    },
    endTimeEnd: {
        type: String,
        default: '24:00'
    }
})

let emits = defineEmits(['startTimeChange','endTimeChange'])
let startTime = ref<string>('')
let endTime = ref<string>('')
let endTimeDisabled = ref<boolean>(true)
watch(() => startTime.value, val => {
    if (val === ''){
         endTime.value = ''
         endTimeDisabled.value = true
         }
    else {
        endTimeDisabled.value = false
        emits('startTimeChange', val)
    }
})


watch(() => endTime.value, val => {
    if(val !== '') emits('endTimeChange',{
        startTime: startTime.value,
        endTime: endTime.value
    })
})
</script>
<style lang='scss' scoped>
</style>