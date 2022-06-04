<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopNav from "./topNav.vue";
import SubNav from "./topSubNav.vue";
</script>

<template>
  <div class="header-container">
    <TopNav />
    <SubNav />
  </div>
</template>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 105px;
}
</style>
