<template>
  <textarea placeholder="在这儿添加游记文字......" maxlength="5000" style="overflow: hidden;height: 208px;width: 100%"></textarea>
</template>
<script>
  export default{}
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
  textarea
    display: block;
    width: 658px;
    min-height: 208px;
    padding: 10px;
    border: 1px solid #fff;
    font-size: 14px;
    line-height: 24px;
    color: #666;
    resize: none;
    outline: 0;
    &:focus
      animation-name: flash;
      animation-duration: 2s;
      animation-timing-function: initial;
      animation-delay: initial;
      animation-iteration-count: initial;
      animation-direction: initial;
      animation-fill-mode: initial;
      animation-play-state: initial;
      @keyframes flash {
        25%,75% {
          border-color:#3399ff;
          box-shadow:0 0 3px #3399ff
        }
        0%,50%,100% {
          border-color:#fff;
          box-shadow:none
        }
      }
</style>
