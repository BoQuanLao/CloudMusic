<script setup lang="ts">
import { ref, VNodeRef } from "vue";
const liRefs: VNodeRef = ref([]);
const setLiRef = (e: Element): VNodeRef => {
  return liRefs.value.push(e);
};

const switchLi = (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLElement;
  console.log(target.localName);
  if (target.localName === "ul") {
    return;
  }
  for (let i = 0; i < liRefs.value.length; i++) {
    liRefs.value[i].className = "";
  }
  const curLi = target.parentNode as HTMLElement;
  curLi.className = "active";
};
</script>

<template>
  <div class="m-top-subnav">
    <div class="wrap">
      <ul @click="switchLi" class="nav">
        <li :ref="setLiRef" class="active">
          <a href="">推荐</a>
        </li>
        <li :ref="setLiRef">
          <a href="">排行榜</a>
        </li>
        <li :ref="setLiRef">
          <a href="">歌单</a>
        </li>
        <li :ref="setLiRef">
          <a href="">主播电台</a>
        </li>
        <li :ref="setLiRef">
          <a href="">歌手</a>
        </li>
        <li :ref="setLiRef">
          <a href="">新碟上架</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.m-top-subnav {
  height: 35px;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  .wrap {
    width: 1100px;
    margin: 0 auto;
    height: 100%;
    .nav {
      width: 600px;
      height: 100%;
      margin-left: 180px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        padding: 3px 10px;
        border-radius: 20px;
        a {
          color: #fff;
        }
        &:hover {
          background: #9b0909;
        }
        &.active {
          background-color: #9b0909;
        }
      }
    }
  }
}
</style>
