<template>
  <top-bar></top-bar>
  <div class="main">
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item href="/community">旅游问答</Breadcrumb-item>
        <Breadcrumb-item>我要提问</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <Row :gutter="40">
      <i-col span="18">
        <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="0" :width="500">
          <div class="qt qt-tit">
            <h5>
              问题标题
            </h5>
            <Form-item prop="name">
              <i-input :value.sync="formValidate.tit" placeholder="请输入问题，不少于10个字"></i-input>
            </Form-item>
          </div>
          <div class="qt qt-descripe">
            <h5>问题详细描述</h5>
            <text-area></text-area>
          </div>
          <div class="qt qt-destination">
            <h5>
              请选择目的地
            </h5>
            <Form-item label="城市" prop="city">
              <i-select :model.sync="formValidate.city" placeholder="请选择所在地">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
              </i-select>
            </Form-item>
          </div>
          <div class="qt qt-tag">
            <h5>
              标签分类
            </h5>
            <div class="tag-list">
              <Tag v-for="tag in tagList" :class="{ 'chose': tag.visible}" @click="tag.visible = !tag.visible">{{ tag.name }}</Tag>
              <div class="add_btn">
                <Icon type="plus-circled" :class="{ 'trans': !close}" @click="close = !close"></Icon>
                <input type="input" v-show="!close" v-model="tagValue" @keyup.enter="addTag" placeholder="请输入标签名称">
              </div>
            </div>
            <Form-item>
              <i-button type="primary" class="sub" @click="handleSubmit('formValidate')">提交</i-button>
            </Form-item>
          </div>
        </i-form>
      </i-col>
      <i-col span="6">
        <div class="qt-slider">
          <div class="qts-tit">
            提问的正确姿势
          </div>
          <div class="qts-con">
            <p>1.问题要【具体】【真实】【诚恳】，问题较多，需全面阐述时，可以添加问题补充。结伴/交易/与旅行无关的提问将被删除。</p>
            <p>2.给问题添加目的地，并打上正确的标签将有助于更快地获得回答</p>
          </div>
        </div>
      </i-col>
    </Row>
  </div>

</template>
<script>
  import topBar from '../components/topBar.vue'
  import textArea from '../components/textarea.vue'
  export default {
    components: {
      topBar,
      textArea
    },
    data () {
      return {
        formValidate: {
          tit: '',
          city: ''
        },
        ruleValidate: {
          tit: [
            {required: true, message: '标题不能为空', min: 10, trigger: 'blur'}
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' }
          ]
        },
        tagList: [
          {
            name: '旅行',
            show: true,
            visible: false
          },
          {
            name: '景点',
            show: true,
            visible: true
          },
          {
            name: '交通',
            show: true,
            visible: false
          },
          {
            name: '行程',
            show: true,
            visible: false
          }
        ],
        close: true,
        tagValue: ''
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      addTag () {
        let newTag = {}
        if (this.tagValue) {
          newTag.name = this.tagValue
          newTag.show = true
          newTag.visible = true
          this.tagList.push(newTag)
          this.tagValue = ''
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .main
    margin-top 10px
    padding 0 160px
    position relative
    .layout-breadcrumb
      margin-top 20px
    .qt
      margin-top 40px
      h5
        height 30px
        font-size 16px
        font-weight normal
        line-height 30px
        color #333
        margin-top 20px
        margin-bottom 10px
    .qt-tit
      margin-top 24px
    input
      margin-top 20px
  .add_btn
    display inline-block
    font-size 24px
    color #3399ff
    width 140px
    line-height 24px
    vertical-align middle
    position relative
    input
      display: block;
      width: 112px;
      height: 24px;
      padding: 0 12px;
      border: 1px solid #e5e5e5;
      background-color: #f6f6f6;
      font-size: 14px;
      line-height: 24px;
      color: #999;
      position: absolute;
      left: 30px;
      top: 0;
      z-index: 2;
      margin-top 0px
      outline none
      font-size 12px
      transition: all .2s;
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
  .trans
    animation transformer 2s
    transition:transform 2s;
    @keyframes transformer
      0%
        transform rotate(0deg)
      100%
        transform rotate(135deg)
    &:hover
      transform rotate(135deg)
  .chose
    background #fff
    color #3399ff
    border 1px solid #3399ff
  .sub
    margin-top 60px
  .qt-slider
    padding-top: 20px;
    .qts-tit
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 20px;
    .qts-con
      p
        margin-bottom: 24px;
        color: #999;
  .ivu-select
    width 120px
  .ivu-input-wrapper
    width 90%
</style>
