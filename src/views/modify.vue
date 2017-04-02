<template>
  <top-bar></top-bar>
  <div class="upload-file">
    <div class="set-tit-img">
      <div class="upload-icon">
        <Upload
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或将文件拖拽到这里上传</p>
          </div>
        </Upload>
        <h2>设置游记头图</h2>
        <p>图片建议选尺寸大图，如相机原图</p>
      </div>
    </div>
    <div class="set-tit">
      <input type="text" placeholder="请填写标题" maxlength="48">
    </div>
  </div>
  <edit></edit>
  <footerr></footerr>
</template>
<script>
  import topBar from '../components/topBar.vue'
  import edit from '../components/edit.vue'
  import footerr from '../components/footer.vue'
  export default {
    data () {
      return {
        showEditBtn: true,
        modalPara: false,
        modalFile: false,
        formValidate: {
          tit: ''
        },
        ruleValidate: {
          tit: [
            { required: true, message: '段落标题不能为空', trigger: 'blur' }
          ]
        },
        paraBg: {
          'ps1': {
            'url': '../assets/paragraph/ps1.gif',
            'iscur': true
          },
          'ps2': {
            'url': '../assets/paragraph/ps2.gif',
            'iscur': false
          },
          'ps3': {
            'url': '../assets/paragraph/ps3.gif',
            'iscur': false
          },
          'ps4': {
            'url': '../assets/paragraph/ps4.gif',
            'iscur': false
          },
          'ps5': {
            'url': '../assets/paragraph/ps5.gif',
            'iscur': false
          },
          'ps6': {
            'url': '../assets/paragraph/ps6.gif',
            'iscur': false
          },
          'ps7': {
            'url': '../assets/paragraph/ps7.gif',
            'iscur': false
          }
        }
      }
    },
    components: {
      topBar,
      edit,
      footerr
    }
  }
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .clearfix::after
    content ''
    clear both
    height 0
    overflow hidden
    display block
  .upload-file
    width 100%
    height 426px
    background: url(../assets/page_bg.jpg) center 0 no-repeat;
    background-size: cover;
    position: relative;
    .set-tit-img
      padding 150px 0 0 275px
      padding-left 0
      width 505px
      margin 0 auto
      position relative
      .upload-icon
        height 200px
        width 100%
        .ivu-upload
          float left
          padding-left 5px
          padding-right 5px
          margin-right 20px
        h2
          font-size 24px
          color #333
          line-height 70px
          font-weight normal
          margin-top 2px
          text-align left
        p
          margin-top: 12px;
          font-size: 16px;
    .set-tit
      width: 938px;
      padding: 20px 20px;
      height: 20px;
      background: #fff;
      border: 1px solid #fff;
      line-height: 20px;
      position: absolute;
      bottom: 25px;
      z-index: 1;
      left: 50%;
      margin-left: -489px;
      box-shadow: 0 2px 2px rgba(110,98,85,.5);
      input
        width: 868px;
        height: 20px;
        line-height: 22px;
        font-size: 18px;
        border: 0;
        _border: 0;
        color: #666;
        float: left;
        margin-top -8px
        &:focus
          border none
          border-color transparent
          outline none
</style>
