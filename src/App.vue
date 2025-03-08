<template>
  <div id="app">
    <el-tabs type="border-card">
    <el-tab-pane label="抖音外卖"><DouYinPage /></el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
// import '@/assets/js/app'
import DouYinPage from '@/components/part1/DouYinPage.vue'

export default {
  name: 'App',
  components: {
    DouYinPage
  },
  data(){
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}

</script>

<style>
*{padding: 0;margin: 0;}
#app {

}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
