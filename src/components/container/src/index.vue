<template>
    <div class="common-layout">
        <el-container>
            <el-header>
              <NavHeader v-model:collapse="isCollapse"></NavHeader>
            </el-header>
            <el-container>
                <el-aside  width="auto">
                   <NavSide v-model:collapse="isCollapse"></NavSide>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>



</template>
<script lang="ts" setup>
    import {ref} from 'vue'
import NavHeader from './navHeader/index.vue'
import NavSide from './navSide/index.vue'
    let isCollapse = ref(true)
   
</script>
<style lang="scss" scoped>
.el-header {
    margin: 15px;
    border-top: 2px solid rgb(160, 200, 246);
    border-left: 2px double rgb(160, 200, 246);
    border-right: 2px dotted rgb(160, 200, 246);
    border-bottom: 2px groove rgb(160, 200, 246);
    border-radius: 20px ;
  box-shadow: 10px 9px 17px -2px rgba(21, 54, 130, 0.58);
-webkit-box-shadow: 9px 9px 17px -2px rgba(21, 54, 130, 0.58);
-moz-box-shadow: 10px 9px 17px -2px rgba(21, 54, 130, 0.58);
}
.el-aside {
      border-radius: 20px ;
       border-right: 2px groove rgb(160, 200, 246);
    border-bottom: 2px groove rgb(160, 200, 246);

}
</style>