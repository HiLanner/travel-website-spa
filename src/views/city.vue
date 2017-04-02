<template>
  <div class="row row-place-top">
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item href="#">目的地</Breadcrumb-item>
        <Breadcrumb-item href="#">北京</Breadcrumb-item>
        <Breadcrumb-item>路线</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <div class="city-intro">
      <h1>北京</h1>
      <p>北京简称京，是中国的首都，全国的政治、文化中心和国际交往的枢纽，也是一座著名的历史文化名城，与西安、洛阳、开封、南京、杭州并列为中国六大古都。
        北京具有丰富的旅游资源，对外开放的旅游景点达200多处，有世界上最大的皇宫紫禁城、祭天神庙天坛、皇家花园北海、皇家园林颐和园，还有八达岭、慕田峪、
        司马台长城以及世界上最大的四合院恭王府等各胜古迹。全市共有文物古迹7309项，其中国家文物保护单位42个，市级文物保护单位222个。北京的市树为国槐和侧柏，
        市花为月季和菊花。另外，北京出产的象牙雕刻、玉器雕刻、景泰蓝、地毯等传统手工艺品驰誉世界。</p>
    </div>
    <router-view></router-view>
</div>
</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.city-intro
  padding 30px 0
  border-bottom: 1px solid #e4e4e4;
  h1
    font-size 50px
    font-weight normal
</style>
