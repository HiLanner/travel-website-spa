<template>
  <div>
    <div>
      <top-bar></top-bar>
    </div>
    <div class="banner">
      <slide></slide>
      <div class="search">
        <p>输入你想要的......</p>
        <i-input>
          <i-select :model.sync="select3" slot="prepend" style="width: 80px">
            <i-option value="all"> 全部</i-option>
            <i-option value="stragety">游记</i-option>
            <i-option value="城市">城市</i-option>
            <i-option value="社区">社区</i-option>
          </i-select>
          <i-button slot="append" icon="ios-search"></i-button>
        </i-input>
        <div class="search-answer"></div>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <footerrr></footerrr>
  </div>
</template>
<script>
  import slide from '../components/slider'
  import topBar from '../components/topBar.vue'
  import footerrr from '../components/footer.vue'
  export default{
    data () {
      return {
        select: ' 全部'
      }
    },
    components: {
      slide,
      topBar,
      footerrr
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner
    position relative
  .carousel-item img
    width 100
    height 100%
  .search
    position absolute
    z-index 12
    bottom 80px
    width 400px
    height 140px
    padding 0 20px
    left 50%
    margin-left -(@width / 2)
    background rgba(0,0,0,0.3)
    border-radius 5px
    p
      padding 20px 0
      color: #fff
    .search-answer
      display none
      width 360px
      height 200px
      padding 10px
      border-radius 5px
      margin-top 15px
      background #fff
  .main
      margin-top 10px
      padding 0 160px
      position relative
    .create
      position absolute
      right 10px
      top 5px
  .ivu-card
    margin-bottom 15px
  .page
    margin 0 auto
</style>
