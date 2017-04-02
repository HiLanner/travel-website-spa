<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-key="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <Menu-item key="1">
          <Icon type="ios-navigate"></Icon>
          <a v-link="{ path: '/' }">首页</a>
        </Menu-item>
        <Menu-item key="2">
          <Icon type="ios-keypad"></Icon>
          <a v-link="{ path: '/destination' }">目的地</a>
        </Menu-item>
        <Menu-item key="3">
          <Icon type="ios-analytics"></Icon>
          <a v-link="{ path: '/strategy' }">攻略</a>
        </Menu-item>
        <Menu-item key="4">
          <Icon type="ios-paper"></Icon>
          <a v-link="{ path: '/community' }">社区</a>
        </Menu-item>
        </div>
        <div class="layout-ceiling">
          <div class="layout-ceiling-main">
            <a v-link="{ path: '/signin' }">登录</a> |
            <a v-link="'/usercenter'">个人中心</a> |
            <a v-link="'/signup'">注册</a>
          </div>
      </div>
    </Menu>
  </div>
</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-ceiling{
    background: #464c5b;
    overflow: hidden;
  }
  .layout-ceiling-main{
    float: right;
    margin-right: 15px;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  a{
    color: #9ba7b5;
  }
</style>
