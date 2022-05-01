<template>
  <div class="menu-box" @click="toggle">
                <el-icon-expand v-if="collapse" />
                <el-icon-fold v-else/>
                </div>
</template>
<script lang="ts" setup>
let props = defineProps<{
    collapse: boolean
}>()
let emits = defineEmits(['update:collapse'])
 let toggle = () => {
     // change parents' component's data
       emits('update:collapse', !props.collapse)
    }
</script>
<style lang="scss" scoped>
.menu-box {
    margin-top: 2em;
    margin-left: -43em;
    display: flex;
    justify-content: center;
    align-items: center;
}
svg {
    text-align: center;
}

</style>