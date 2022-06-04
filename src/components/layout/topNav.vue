<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="m-top-nav">
    <div class="wrap">
      <h1 class="logo">
        <a href="/#"> 网易云音乐 </a>
      </h1>
      <ul class="m-nav">
        <li class="fst">
          <a href="">发现音乐</a>
        </li>
        <li>
          <a href="">我的音乐</a>
        </li>
        <li>
          <a href=""> 关注 </a>
        </li>
        <li>
          <a href=""> 商城 </a>
        </li>
        <li>
          <a href=""> 音乐人 </a>
        </li>
        <li>
          <a href="">下载客户端</a>
          <sup class="hot">&nbsp;</sup>
        </li>
      </ul>
      <div class="right">
        <div class="search">
          <input class="search-input" type="text">
        </div>
        <a class="creater-center" href="">创作者中心</a>
        <div class="top-login">登录</div>
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
      width: 508px;
      display: flex;
      align-items: center;
      li {
        position: relative;
        height: 70px;
        line-height: 70px;
        font-size: 14px;
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
        &.fst {
          a {
            background: #000;
            color: #fff;
          }
        }
      }
    }
    .right{
      margin-left: 60px;
      display: flex;
    }
  }
}
</style>
