<template>
  <div class="roadline">
    <h2>
      北京的几条路线
    </h2>
    <div class="flex">
      <div class="line">
        <h3><Icon type="star" color="#3399ff"></Icon>&nbsp;&nbsp;北京6日游</h3>
        <div class="map">
          <img src="../assets/map.png">
        </div>
        <div class="intro">
          <p>D1 <span>天安门广场</span><span class="arrow">→</span><span>前门大街</span><span class="arrow">→</span><span>故宫</span><span class="arrow">→</span><span>景山公园</span></p>
          <p>D2 <span>天坛</span><span class="arrow">→</span><span>雍和宫</span><span class="arrow">→</span><span>孔庙和国子监</span><span class="arrow">→</span><span>北大</span></p>
        </div>
        <a v-link="$route.path + '/line/' + 123">详情>></a>
      </div>
      <div class="line">
        <h3><Icon type="star" color="#3399ff"></Icon>&nbsp;&nbsp;北京6日游</h3>
        <div class="map">
          <img src="../assets/map.png">
        </div>
        <div class="intro">
          <p>D1 <span>天安门广场</span><span class="arrow">→</span><span>前门大街</span><span class="arrow">→</span><span>故宫</span><span class="arrow">→</span><span>景山公园</span></p>
          <p>D2 <span>天坛</span><span class="arrow">→</span><span>雍和宫</span><span class="arrow">→</span><span>孔庙和国子监</span><span class="arrow">→</span><span>北大</span></p>
        </div>
        <a v-link="$route.path + '/line/' + 123">详情>></a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .roadline
    h2
      margin-top 20px
      font-size 26px
      font-weight normal
    .flex
      margin-top 40px
      display flex
      -webkit-flex-direction: row;
      display: flex;
      flex-direction: row;
      .line
        height: 370px;
        border: 1px solid #e6e6e6;
        box-shadow: 0 0 3px rgba(224,224,224,.75);
        color: #333;
        margin 0 15px
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        width: 30px; /* 让过渡表现良好。（从/到"width:auto"的过渡至少在 Gecko 和 Webkit 上是有 bug 的。更多信息参见 http://bugzil.la/731886 ） */
        -webkit-transition: width 0.7s ease-out;
        transition: width 0.7s ease-out;
        position relative
        a
          position: absolute;
          background-color: #fff;
          bottom 30px
          right 20px
          font-size 14px
        h3
          height: 30px;
          margin: 15px 20px;
          line-height: 30px;
          font-size: 20px;
          font-weight: normal;
        .map
          img
            width 100%
        .intro
          padding 20px 5px
          p
            line-height 40px
            font-size 16px
            color #333
            .arrow
              margin: 0 10px;
              width: 14px;
              height: 10px;
              overflow: hidden;
</style>
