<template>
  <div style="display: flex; margin-top: 30px">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        
        :placeholder="startPlaceholder"
        type="date"
        v-bind="$attrs.startOption"
        :disabledDate="startDateDisabled"
       
      ></el-date-picker>
    </div>

    <div>
      <el-date-picker
        v-model="endDate"
       
        :placeholder="endPlaceholder"
       
        type="date"
        v-bind="$attrs.endOption"
        :disabledDate="endDisabledDate"
        :disabled="endDateDisabled"
       
      ></el-date-picker>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { start } from "repl";
import { ref, watch } from "vue";
let props = defineProps({
  startPlaceholder: {
    type: String,
    default: "Start Date",
  },
 
 
  endPlaceholder: {
    type: String,
    default: "End Date",
  },
 
  disableToday: {
    type: Boolean,
    default: true,
  },
});

let emits = defineEmits(["startDateChange", "endDateChange"]);
let startDate = ref<Date | null>(null);
let endDate = ref<Date | null>(null);
let endDateDisabled = ref<boolean>(true);
let startDateDisabled = (time: Date) => {
  if (props.disableToday)
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24;
};
let endDisabledDate = (time: Date) => {
  if (startDate.value)
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24;
};

watch(
  () => startDate.value,
  (val) => {
    if (val === null) {
      endDate.value = null;
      endDateDisabled.value = true;
    } else {
      endDateDisabled.value = false;
      emits("startDateChange", val);
    }
  }
);

watch(
  () => endDate.value,
  (val) => {
    if (val !== null)
      emits("endDateChange", {
        startDate: startDate.value,
        endDate: endDate.value,
      });
  }
);
</script>
<style lang="scss" scoped></style>
