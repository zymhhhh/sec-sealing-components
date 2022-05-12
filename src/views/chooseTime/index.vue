<template>
    <div>
        <s-time :startOption="startOption" @startTimeChange="startTimeChange" @endTimeChange="endTimeChange"> </s-time>
    
        <s-day @startDateChange="dateStartChange" @endDateChange="dateEndChange"></s-day>
    </div>
</template>
<script lang='ts' setup>


interface endValue {
    startTime: string,
    endTime: string
}

interface endDateValue {
    startDate: Date,
    endDate: Date,
}
let startTimeChange  = (val: string)=> {

    console.log(val)
}

let endTimeChange = (val: endValue) => {
    console.log(val)

}

let dateStartChange = (val: Date) => {
    console.log(val)
}
let dateEndChange = (val: endDateValue) => {
    console.log(val)

}
let startOption = {
   // size: 'mixin',
    clearable: false
}
</script>
<style lang='scss' scoped>
</style>