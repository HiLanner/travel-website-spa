<template>
  <div class="content">
    <div class="content-bar clearfix">
      <div class="add_btn" @click="showEditEvent">
        <Icon type="plus-circled"></Icon>
      </div>
      <ul v-show="showEditBtn" transition="bounce">
        <li><Icon type="pound"></Icon> 添加文字</li>
        <li @click="modalFile = true"><Icon type="images"></Icon> 添加照片</li>
        <li @click="modalPara = true"><Icon type="ios-paper-outline"></Icon> 添加段落标题</li>
      </ul>
    </div>
    <div class="add_words">
      <text-area></text-area>
      <div class="complete">
        <i-button type="primary">确定</i-button>
      </div>
    </div>
    <Modal
      :visible.sync="modalFile"
      title="上传本地图片"
      @on-ok="chooseImg"
      @on-cancel="cancelImg">
      <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>点击或将文件拖拽到这里上传</p>
        </div>
      </Upload>
    </Modal>
    <Modal
      :visible.sync="modalPara"
      title="添加段落标题"
      @on-ok="choosePara('formValidate')"
      @on-cancel="cancelPara">
      <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="100">
        <Form-item label="标题" prop="tit">
          <i-input :value.sync="formValidate.tit" placeholder="添加段落标题让结构更加清晰"></i-input>
        </Form-item>
        <Form-item label="选择段落图片">
          <div class="paragraph_pics">
            <ul class="default_pics _j_coverlist" @click="chooseParaImg">
              <!--<li v-for="item in paraBg" :class="cur: item.iscur" @click="setCur($index)" datatype="item"><img src="item.url"></li>-->
              <li :class="{'cur': paraBg['ps1'].iscur}"><img data-type="ps1" src="../assets/paragraph/ps1.gif"></li>
              <li :class="{'cur': paraBg['ps2'].iscur}"><img data-type="ps2" src="../assets/paragraph/ps2.gif"></li>
              <li :class="{'cur': paraBg['ps3'].iscur}"><img data-type="ps3" src="../assets/paragraph/ps3.gif"></li>
              <li :class="{'cur': paraBg['ps4'].iscur}"><img data-type="ps4" src="../assets/paragraph/ps4.gif"></li>
              <li :class="{'cur': paraBg['ps5'].iscur}"><img data-type="ps5" src="../assets/paragraph/ps5.gif"></li>
              <li :class="{'cur': paraBg['ps6'].iscur}"><img data-type="ps6" src="../assets/paragraph/ps6.gif"></li>
              <li :class="{'cur': paraBg['ps7'].iscur}"><img data-type="ps7" src="../assets/paragraph/ps7.gif"></li>
            </ul>
          </div>
        </Form-item>
      </i-form>
    </Modal>
  </div>
</template>
<script>
  import textArea from './textarea.vue'
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
      textArea
    },
    methods: {
      showEditEvent () {
        this.showEditBtn = !this.showEditBtn
      },
      chooseImg () {
        this.$Message.info('点击了确定')
      },
      cancelImg () {
        this.$Message.info('点击了取消')
      },
      choosePara (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      cancelPara () {
        this.$Message.info('点击了取消')
      },
      chooseParaImg (e) {
        if (e.target.dataset.type) {
          for (var key in this.paraBg) {
            e.target.dataset.type === key ? this.paraBg[key].iscur = true : this.paraBg[key].iscur = false
          }
        }
      }
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
  .content
    width 780px
    margin 20px auto 10px
    position relative
    .content-bar
      width 600px
      margin 20px 0
      position relative
      height 40px
      left 48px
      .add_btn
        position absolute
        left -40px
        top 13px
        font-size 26px
        color #3399ff
        &:hover
          animation transformer 2s
          @keyframes transformer
            0%
              transform rotate(0deg)
            50%
              transform rotate(135deg)
            100%
              transform rotate(0deg)
      ul
        for num in 1 2 3
          li:nth-child({num})
            position absolute
            cursor pointer
            left 200px * (num - 1)
            width 200px
            font-size 26px
            color #3399ff
    .add_words
      width 680px
      background-color #fff
      height 400px
      margin-left 40px
      margin-bottom 18px
      .complete
        width 100%
        border-top 1px solid #e5e5e5
        position relative
        button
          width auto
          margin-right 0
          padding 0 25px
          line-height 26px
          height 26px
          font-size 14px
          float right
          border-radius 5px
          margin-top 25px
  .bounce-transition
    display: inline-block /* 否则 scale 动画不起作用 */
  .bounce-enter
    animation: bounce-in .5s
  .bounce-leave
    animation: bounce-out .5s
  @keyframes bounce-in
    0%
      transform: scale(0)
    50%
      transform: scale(1.5)
    100%
      transform: scale(1)
  @keyframes bounce-out
    0%
      transform: scale(1)
    50%
      transform: scale(1.5)
    100%
      transform: scale(0)
  .paragraph_pics
    ul
      li
        float left
        padding 4px
        border 1px solid transparent
        border-radius 3px
        cursor pointer
      li:hover
        border:1px solid #3399ff;
        box-shadow:0 0 3px #3399ff
      .cur
        border:1px solid #3399ff;
        box-shadow:0 0 3px #3399ff
</style>
