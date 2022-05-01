<template>
 <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo">
                        <el-menu-item index="1">
                            <i class='el-icon'>
                                <el-icon-menu />
                            </i>
                            <span>Navigator Two</span>
                        </el-menu-item>
                    </el-menu>
</template>
<script lang="ts" setup>
let props = defineProps<{
    collapse: boolean
}>()
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>