<template>
    <div>
        <el-progress v-bind="$attrs" :percentage="p"></el-progress>
    </div>
</template>
<script lang='ts' setup>
import {onMounted, ref} from 'vue'
let props = defineProps({
    percentage: {
        type: Number,
        default: 0

    },
    isAnimation: {
        type: Boolean,
        default: false,
    },
    time: {
        type: Number,
        default: 3000
    }
})
let p = ref(0)
onMounted(() => {
    if (props.isAnimation) {
        // loading in time
        let t = Math.ceil(props.time / props.percentage)
        let timer = setInterval(() => {
            p.value++
            if(p.value >= props.percentage) {
                p.value = props.percentage
                clearInterval(timer)
            }
        
        }, t)
    } else {
        p.value = props.percentage
    }
})
</script>
<style lang='scss' scoped>

</style>