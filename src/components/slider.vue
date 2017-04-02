<template>
  <Carousel
    :autoplay="setting.autoplay"
    :autoplay-speed="setting.autoplaySpeed"
    :dots="setting.dots"
    :trigger="setting.trigger"
    :arrow="setting.arrow">
    <Carousel-item>
      <div class="demo-carousel"><img src="../assets/img01.jpeg"></div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel"><img src="../assets/img02.jpeg"></div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel"><img src="../assets/img03.jpeg"></div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel"><img src="../assets/img04.jpeg"></div>
    </Carousel-item>
  </Carousel>
</template>
<script>
  export default {
    data () {
      return {
        setting: {
          autoplay: true,
          autoplaySpeed: 3000,
          dots: 'inside',
          trigger: 'click',
          arrow: 'hover'
        }
      }
    }
  }
</script>
<style>
  .ivu-carousel-list{
    height: 400px;
  }
</style>
