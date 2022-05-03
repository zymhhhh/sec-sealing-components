<template>
    <div class="trend">
        <div class="text" :style="{ color: textColor }">
            <slot v-if="slots.default"></slot>
            <div v-else>{{ text }}</div>
        </div>
        <div class="icon">
            <!-- <el-icon-arrowup v-if="type === 'up'" :style="{ color: !reverseColor ? upIconColor : 'lightgreen' }">
            </el-icon-arrowup>
            <el-icon-arrowdown v-else :style="{ color: !reverseColor ? downIconColor : 'lightpink' }"></el-icon-arrowdown> -->
            <component v-if="type === 'up'" :style="{ color: !reverseColor ? upIconColor : 'lightgreen' }"
                :is="`el-icon-${toLine(upIcon)}`"></component>
            <component v-else :is="`el-icon-${toLine(downIcon)}`"   
            :style="{color: !reverseColor ? downIconColor : 'lightpink'}"></component>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { toLine } from '../../../utils';
import { computed } from '@vue/reactivity';
import { useSlots } from 'vue';
let slots = useSlots()
let props = defineProps({
    type: {
        type: String,
        default: 'up'
    },
    text: {
        type: String,
        default: 'text'
    },
    // color reverse
    reverseColor: {
        type: Boolean,
        default: false
    },
    upIconColor: {
        type: String,
        default: '#f5222d'
    },

    downIconColor: {
        type: String,
        default: 'lightgreen'
    },

    upTextColor: {
        type: String,
        default: '#f5222d'
    },

    downTextColor: {
        type: String,
        default: 'lightgreen'
    },
    upIcon: {
        type: String,
        default: 'ArrowUp'
    },

    downIcon: {
        type: String,
        default: 'ArrowDown'
    }

})
let textColor = computed(() => {
    return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>
<style lang='scss' scoped>
.trend {
    display: flex;
    align-items: center;
}

.text {
    font-size: 12px;
    margin-right: 4px;
}

.icon {
    svg {
        width: 0.8em;
        height: 0.8em;
    }
}
</style>