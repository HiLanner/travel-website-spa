<template>
  <div class="line-intro">
    <div class="line-detail">
      <h2>路线</h2>
      <div class="line">
        <p>D1 <span>天安门广场</span><span class="arrow">→</span><span>前门大街</span><span class="arrow">→</span><span>故宫</span><span class="arrow">→</span><span>景山公园</span></p>
        <p>D2 <span>天坛</span><span class="arrow">→</span><span>雍和宫</span><span class="arrow">→</span><span>孔庙和国子监</span><span class="arrow">→</span><span>北大</span></p>
        <p>D1 <span>天安门广场</span><span class="arrow">→</span><span>前门大街</span><span class="arrow">→</span><span>故宫</span><span class="arrow">→</span><span>景山公园</span></p>
        <p>D2 <span>天坛</span><span class="arrow">→</span><span>雍和宫</span><span class="arrow">→</span><span>孔庙和国子监</span><span class="arrow">→</span><span>北大</span></p>
        <p>D1 <span>天安门广场</span><span class="arrow">→</span><span>前门大街</span><span class="arrow">→</span><span>故宫</span><span class="arrow">→</span><span>景山公园</span></p>
        <p>D2 <span>天坛</span><span class="arrow">→</span><span>雍和宫</span><span class="arrow">→</span><span>孔庙和国子监</span><span class="arrow">→</span><span>北大</span></p>
      </div>
    </div>
    <div class="map">
      <img src="../assets/map.png"/>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .line-intro
    margin-top 40px
    display flex
    -webkit-flex-direction: row;
    display: flex;
    flex-direction: row;
    .line-detail
      min-height: 370px;
      color: #333;
      margin 0 15px
      flex: 1 1 auto;
      width: 400px; /* 让过渡表现良好。（从/到"width:auto"的过渡至少在 Gecko 和 Webkit 上是有 bug 的。更多信息参见 http://bugzil.la/731886 ） */
      -webkit-transition: width 0.7s ease-out;
      transition: width 0.7s ease-out;
      position relative
      h2
        margin-top: 20px;
        font-size: 26px;
        font-weight: normal;
      .line
        p
          line-height 40px
          font-size 16px
          color #333
          .arrow
            margin: 0 10px;
            width: 14px;
            height: 10px;
            overflow: hidden;
    .map
      height 320px;
      flex 1 1 auto;
      overflow hidden
      width 350px
      img
        width 100%
        height 100%

</style>
