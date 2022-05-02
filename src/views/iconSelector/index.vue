<template>
  <div>
      <icon-selector title="select an icon" v-model:visible="visible"></icon-selector>
  </div>
</template>
<style lang='scss' scoped>
</style>
<script lang='ts' setup>
import iconSelector from '../../components/iconSelector/src/index.vue' 
import { ref } from 'vue'
let visible = ref<boolean>(false)
</script>