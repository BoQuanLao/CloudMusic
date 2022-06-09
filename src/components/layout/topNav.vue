<script setup lang="ts">
import { ref, VNode, VNodeRef } from "vue";

// 创建ref列表存储a标签，并且又一个相应的函数设置ref
const aRef: VNodeRef = ref([]);
const setARef = (e: Event): VNodeRef => {
  return aRef.value.push(e);
};

// 处理 Nav 被选中的class样式
const handleSwitchNav = (e: MouseEvent) => {
  e.preventDefault();
  // 清除之前的样式
  for (let i = 0; i < aRef.value.length; i++) {
    aRef.value[i].className = "";
  }
  // 给target声明，不然爆红（target可能为null|undefined）
  const target = e.target as HTMLElement;
  target.className = "fst";
};
</script>

<template>
  <div class="m-top-nav">
    <div class="wrap">
      <h1 class="logo">
        <a href="/#"> 网易云音乐 </a>
      </h1>
      <ul @click="handleSwitchNav" class="m-nav">
        <li>
          <a :ref="setARef" class="fst" href="">
            发现音乐
            <sub class="bottom-triange hid">&nbsp;</sub>
          </a>
        </li>
        <li>
          <a :ref="setARef" href="">
            我的音乐
            <sub class="bottom-triange hid">&nbsp;</sub>
          </a>
        </li>
        <li>
          <a :ref="setARef" href="">
            关注
            <sub class="bottom-triange hid">&nbsp;</sub>
          </a>
        </li>
        <li>
          <a :ref="setARef" href="">
            商城
            <sub class="bottom-triange hid">&nbsp;</sub>
          </a>
        </li>
        <li>
          <a :ref="setARef" href="">
            音乐人
            <sub class="bottom-triange hid">&nbsp;</sub>
          </a>
        </li>
        <li>
          <a :ref="setARef" href="">
            下载客户端
            <sub class="bottom-triange hid">&nbsp;</sub>
          </a>
          <sup class="hot">&nbsp;</sup>
        </li>
      </ul>
      <div class="right">
        <div class="search">
          <label>
            <input
              class="search-input"
              placeholder="音乐/视频/电台/用户"
              type="text"
            />
            <span class="icon"></span>
          </label>
        </div>
        <a class="creater-center" href=""> 创作者中心 </a>
        <div class="top-login">
          <a href="">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.m-top-nav {
  height: 70px;
  background-color: rgb(36, 36, 36);
  border-bottom: 1px solid #000;
  .wrap {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .logo {
      margin: 0;
      padding: 0;
      width: 176px;
      height: 69px;
      background: url("../../assets/topbar.png");
      background-position: 0 0;
      a {
        display: block;
        width: 157px;
        height: 100%;
        padding-right: 20px;
        text-indent: -9999px;
      }
    }
    .m-nav {
      width: 550px;
      display: flex;
      align-items: center;
      li {
        position: relative;
        height: 70px;
        line-height: 70px;
        font-size: 14px;
        .hid {
          position: absolute;
        }
        a {
          display: block;
          padding: 0 19px;
          text-align: center;
          line-height: 70px;
          color: #ccc;
        }
        &:hover {
          background: #000;
          color: #fff;
        }
        .hot {
          display: block;
          position: absolute;
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;
          background: url("../../assets/topbar.png");
          background-position: -190px 0;
        }
        .fst {
          background: #000;
          color: #fff;
          .bottom-triange {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -1px;
            width: 12px;
            height: 7px;
            background-image: url(../../assets/topbar.png);
            background-position: -226px 0;
          }
        }
      }
    }
    .right {
      width: 300px;
      margin-left: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .creater-center {
        width: 90px;
        height: 32px;
        box-sizing: border-box;
        padding-left: 16px;
        border: 1px solid #4f4f4f;
        background-position: 0 -140px;
        line-height: 33px;
        color: #ccc;
        border-radius: 20px;
        &:hover {
          color: #fff;
          text-decoration: none;
          border: 1px solid #ccc;
        }
      }
      .top-login {
        background-color: #242424;
        border-bottom: 1px solid #000;
        a {
          color: #999;
          width: 28px;
          &:hover {
            color: #787878;
          }
        }
      }
      .search {
        position: relative;
        .search-input {
          width: 95%;
          margin: 0;
          padding: 15px 0;
          color: #333;
          height: 30px;
          line-height: 16px;
          text-indent: 28px;
          border-radius: 32px;
          outline: none;
          border: none;
        }
        .icon {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 30px;
          height: 30px;
          border-radius: 32px;
          background: url(/src/assets/topbar.png);
          background-position: 0 -99px;
        }
      }
    }
  }
}
</style>
