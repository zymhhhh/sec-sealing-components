<template>
 <s-menu :collapse="collapse" :data = "data" router :defaultActive="$route.path"></s-menu>
</template>
<script lang="ts" setup>
let props = defineProps<{
    collapse: boolean
}>()
let data = [
    {
        icon:'HomeFilled',
        name:"home",
        index: '/'
    },
    {
        icon:'Check',
        name:"iconSelector",
        index: '/iconSelector'
    },
    {
        icon:'Location',
        name:"areaSelector",
        index: '/areaselector'
    },
    {
        icon:'bell',
        name:"Notification",
        index: '/notification'
    },
    {
        icon:'trendcharts',
        name:"trend",
        index: '/trend'
    },
    {
        icon:'timer',
        name:"chooseTime",
        index: '/chooseTime'
    },
    {
        icon:'maplocation',
        name:"citySelector",
        index: '/cityselector'
    },
    {
        icon:'calendar',
        name:"calendar",
        index: '/calendar'
    },
    {
        icon:'loading',
        name:"progress",
        index: '/progress'
    },

    {
        icon:'setting',
        name:"form",
        index: '/form'
    },
    {
        icon:'grid',
        name:"table",
        index: '/table'
    },
    {
        icon:'menu',
        name:"menu",
        index: '/menu'
    },
    {
        icon:'',
        name:"home",
        index: '/'
    },
    {
        icon:'',
        name:"home",
        index: '/'
    },
    {
        icon:'',
        name:"home",
        index: '/'
    },
]
</script>
<style lang="scss" scoped>

</style>