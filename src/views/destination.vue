<template>
  <Row :gutter="40">
    <i-col span="8">
      <div class="destination-img"><img src="../assets/beijing.jpeg" /></div>
      <div class="cover">
        <h3>在北京，我想和你...</h3>
        <p>去TRB bites美美地吃个下午茶</p>
        <p>在春晖园的私汤里彻底放松</p>
        <p>去华尔道夫酒店畅享难忘的浪漫时光</p>
      </div>
    </i-col>
    <i-col span="8">
      <div class="destination-img"><img src="../assets/chengdu.jpeg"></div>
      <div class="cover">
        <h3>在成都IFS、太古里快耍慢活</h3>
        <p>传统与现代融合的成都太古里</p>
        <p>人来人往的宽窄巷子</p>
        <p>憨态可掬的国宝大熊猫</p>
      </div>
    </i-col>
    <i-col span="8">
      <div class="destination-img"><img src="../assets/hangzhou.jpeg"></div>
      <div class="cover">
        <h3>烟雨蒙蒙的江南西子</h3>
        <p>春有柳絮雨濛濛，夏有荷花腰肢展</p>
        <p>秋有梧桐锁清秋，冬有白雪落缤纷</p>
        <p>成排杨柳垂下枝身，在风中摇曳</p>
      </div>
    </i-col>
  </Row>
  <div class="destination-city">
    <div class="line"></div>
    <h1>目的地推荐</h1>
    <div class="city-list">
      <Row :gutter="32">
        <i-col span="10" offset="2">
          <dl>
            <dt>直辖市</dt>
            <dd>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
            </dd>
          </dl>
          <dl>
            <dt>直辖市</dt>
            <dd>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
            </dd>
          </dl>
          <dl>
            <dt>直辖市</dt>
            <dd>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
            </dd>
          </dl>
          <dl>
            <dt>直辖市</dt>
            <dd>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
            </dd>
          </dl>
          <dl>
            <dt>直辖市</dt>
            <dd>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
            </dd>
          </dl>
        </i-col>
        <i-col span="10">
          <dl>
            <dt>直辖市</dt>
            <dd>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
            </dd>
          </dl>
          <dl>
            <dt>直辖市</dt>
            <dd>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
            </dd>
          </dl>
          <dl>
            <dt>直辖市</dt>
            <dd>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
            </dd>
          </dl>
          <dl>
            <dt>直辖市</dt>
            <dd>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
            </dd>
          </dl>
          <dl>
            <dt>直辖市</dt>
            <dd>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
              <a v-link="{ name: 'city', params: { cityId: 123 }}" target="_blank">北京</a>
            </dd>
          </dl>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ivu-col-span-8
    overflow hidden
  .destination-img
    height 250px
    img
      width 100%
      height 100%
  .cover
    padding 10px
    box-sizing border-box
    width 88%
    color #fff
    position absolute
    z-index 12
    bottom 0
    background: linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.1));
  .destination-city
    margin-top 60px
    position relative
    .line
      width 100%
      border-bottom 2px solid #3399ff
      border-top 2px solid #3399ff
      border-radius 2px
    h1
      width 160px
      text-align center
      background #fff
      position absolute
      left 50%
      margin-left -(@width/2)
      margin-top -20px
      padding 0 20px
    .city-list
      margin-top 60px
      line-height 24px
      dl
        border-bottom: 1px dashed #eee
        padding: 20px 0 20px 100px
        dt
          float: left
          font-size: 16px
          color: #333
          margin-left: -100px
        dd
          a
            margin-right 10px
            color #666
            cursor pointer
            font-size 14px
</style>
