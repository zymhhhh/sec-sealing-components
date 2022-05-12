<template>
  <el-popover v-model:visible="visible" placement="bottom-start" :width="430" >
    <template #reference>
      <div class="result" @click="visible = !visible">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown  :class="{ 'rotate': visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row style="align-items: flex-end;">
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="city"></el-radio-button>
            <el-radio-button label="province"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="15">
          <el-select
            @change="changeSelect"
            placeholder="please search city"
            size="small"
            v-model="selectValue"
            filterable
            :filter-method="filterMethod"
          >
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === 'city'">
        <div class="city">
         
          <div
            class="city-item"
            @click="clickChat(item)"
            v-for="(item, index) in Object.keys(cities)"
          >{{ item }}</div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px;" :id="key">
              <el-col :span="2">{{ key }}:</el-col>
              <el-col :span="22" class="city-name">
                <div
                  @click="clickItem(item)"
                  class="city-name-item"
                  v-for="(item, index) in value"
                  :key="item.id"
                >
                  <div>{{ item.name }}</div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province">
          <div
            class="province-item"
            v-for="(item, index) in Object.keys(provinces)"
            :key="index"
            @click="clickChat(item)"
          >{{ item }}</div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(item, index) in Object.values(provinces)" :key="index">
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row style="margin-bottom: 10px;" :id="item1.id">
                <el-col :span="3">{{ item1.name }}:</el-col>
                <el-col :span="21" class="province-name">
                  <div
                    class="province-name-item"
                    v-for="(item2, index2) in item1.data"
                    :key="index2"
                  >
                    <div @click="clickProvince(item2)">{{ item2 }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import city from '../lib/city'
import { City } from './types'
import province from '../lib/province.json'


let emits = defineEmits(['changeCity', "changeProvince"])


let result = ref<string>('please choose a city')

let visible = ref<boolean>(false)

let radioValue = ref<string>('city')

let selectValue = ref<string>('')
// show city
let options = ref<City[]>([])
// all city data
let cities = ref(city.cities)
// all province data
let provinces = ref(province)

let allCity = ref<City[]>([])

// click each city
let clickItem = (item: City) => {
  
  result.value = item.name
  
  visible.value = false
  emits('changeCity', item)
}
let clickProvince = (item: string) => {
  
  result.value = item
  
  visible.value = false
  emits('changeProvince', item)
}


let clickChat = (item: string) => {
  let el = document.getElementById(item)
  if (el) el.scrollIntoView()
}

let filterMethod = (val: string) => {
  let values = Object.values(cities.value).flat(2)
  if (val === '') {
    options.value = values
  } else {
    if (radioValue.value === 'city') {
      
      options.value = values.filter(item => {
        return item.name.includes(val) || item.spell.includes(val)
      })
    } else {
      
      options.value = values.filter(item => {
        return item.name.includes(val)
      })
    }
  }
}

let changeSelect = (val: number) => {
  let city = allCity.value.find(item => item.id === val)!
  result.value = city.name
  if (radioValue.value === 'city') {
    emits('changeCity', city)
  } else {
    emits('changeProvince', city.name)
  }
}
onMounted(() => {
  let values = Object.values(cities.value).flat(2)
  allCity.value = values
  options.value = values
})
</script>

<style lang='scss' scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
.rotate {
  transform: rotate(180deg);
}
svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  transition: all 0.25s linear;
}
.container {
  padding: 6px;
}
.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    border: 1px solid #eee;
    margin-bottom: 8px;
    cursor: pointer;
  }
}
.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}
</style>