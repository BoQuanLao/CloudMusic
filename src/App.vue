<script setup lang="ts">
import MyHeader from "@/components/layout/myHeader.vue";
import MyFooter from "@/components/layout/myFooter.vue";
import Layout from "@/components/layout/index.vue";
</script>

<template>
  <Layout>
    <!-- 头部header区域 -->
    <template #header>
      <MyHeader />
    </template>

    <!-- 中间根据路由地址变化 -->
    <template #default>
      <RouterView></RouterView>
    </template>

    <!-- 底部footer区域 -->
    <template #footer>
      <MyFooter />
    </template>
  </Layout>
</template>

<style lang="less">
body,
html,
#app {
  height: 100%;
}
</style>
