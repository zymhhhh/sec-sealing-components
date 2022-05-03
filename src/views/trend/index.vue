<template>
    <div>
        <div class="flex">
            <div>
                <s-trend text="turnover" type="up"></s-trend>
            </div>
            <div>
                <s-trend text="sales" type="down"></s-trend>
            </div>

             <div>
                <s-trend downIcon="CaretBottom" reverseColor type="down">beijing</s-trend>
            </div>

               <div>
                <s-trend downTextColor="darkgreen" type="down">beijing</s-trend>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
.flex{
    display: flex;
    div {
        margin: 10px;
    }
}
</style>