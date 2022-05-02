<template>
<div>
    <el-select clearable style="margin: 20px" placeholder="please select a province" v-model="province">
        <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
     <el-select clearable :disabled="!province" style="margin: 20px" placeholder="please select a city" v-model="city">
        <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
     <el-select clearable :disabled="!province || !city" style="margin: 20px" placeholder="please select an area" v-model="area">
        <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
</div>
</template>

<script lang='ts' setup>
import {ref, watch} from 'vue'
import allArea from '../lib/pca-code.json'
export interface AreaItem {
    name: string,
    code: string,
    children?: AreaItem[]
} 
export interface Data {
    name: string,
    code: string,

}
let province = ref<string>(''),
    city = ref<string>(''),
    area = ref<string>(''),
    areas = ref(allArea),
    selectCity = ref<AreaItem[]>([]),
    selectArea = ref<AreaItem[]>([]),
    emits = defineEmits(['select'])
watch(()=> province.value, val =>{
    
    if(val) {
            let cities = areas.value.find(item => item.code === province.value)!.children!
            selectCity.value = cities
       }
    city.value = ''
    area.value = ''
})

watch(()=> city.value, val =>{
     if(val) {
            let sarea = selectCity.value.find((item: { code: string; }) => item.code === city.value)!.children!
            selectArea.value = sarea
       }
       area.value = ''
})

watch(()=> area.value, val => {
    if(val){
    let provinceData:Data = {
        code: province.value,
        name: province.value && allArea.find(item=> item.code === province.value)!.name
    }, 
    cityData:Data = {
        code: city.value,
        name: city.value && selectCity.value.find(item=>item.code===city.value)!.name    

    }, 
    areaData:Data = {
        code: val,
        name: val && selectArea.value.find(item=>item.code===val)!.name    };
    emits('select', {
        province:provinceData, city:cityData, area:areaData
    } )
    }
})
</script>

<style lang='scss' scoped>

</style>