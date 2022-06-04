<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="layout-container">
    <header class="header">
      <slot name="header" />
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header,
  .footer {
    flex: 0 0 auto;
  }
  .main {
    flex: 1 1 auto;
  }
}
</style>
