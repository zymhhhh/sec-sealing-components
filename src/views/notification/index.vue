<template>
<s-notification :value="40" :max="20"></s-notification>
<br/>
<br/>
<s-notification value="40" :max="20" isDot></s-notification>
<br/>
<s-notification icon="ChatRound" isDot>
    <template #default><s-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></s-list></template>
</s-notification>

</template>
<script lang='ts' setup>
import {list, actions} from  './data'
let clickItem = (val: any) => {
  console.log(val)
}
let clickAction = (val: any) => {
  console.log(val)
}
</script>
<style lang='scss' scoped>
</style>