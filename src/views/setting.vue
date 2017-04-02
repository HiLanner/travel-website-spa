<template>
  <top-bar></top-bar>
  <div class="content">
    <div class="hd">
      <strong>我的信息</strong>
    </div>
    <div class="info-form">
      <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="头像">
          <div class="origin-photo">
            <img src="../assets/photo.jpeg">
          </div>
          <Upload
            v-ref:upload
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action=""
            style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="camera" size="20"></Icon>
            </div>
          </Upload>
          <Modal title="查看图片" :visible.sync="visible">
            <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
          </Modal>
        </Form-item>
        <Form-item label="姓名" prop="name">
          <i-input :value.sync="formValidate.name" placeholder="请输入姓名"></i-input>
        </Form-item>
        <Form-item label="密码" prop="password">
          <i-input :value.sync="formValidate.password" type="password" placeholder="请输入密码"></i-input>
        </Form-item>
        <Form-item>
          <i-button type="primary" @click="handleSubmit('formInline')">登录</i-button>
        </Form-item>
      </i-form>
    </div>
  </div>
</template>
<script>
  import topBar from '../components/topBar.vue'
  export default {
    data () {
      return {
        defaultList: [
          {
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          },
          {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }
        ],
        imgName: '',
        visible: false
      }
    },
    components: {
      topBar
    },
    methods: {
      handleSuccess (res, file) {
        // 因为上传过程为实例，这里模拟添加 url
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
        file.name = '7eb99afb9d5f317c912f08b5212fd69a'
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
        })
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: '超出文件大小限制',
          desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
        })
      },
      handleBeforeUpload () {
        const check = this.uploadList.length < 5
        if (!check) {
          this.$Notice.warning({
            title: '最多只能上传 5 张图片。'
          })
        }
        return check
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    width 440px
    margin 0 auto
    margin-top 40px
    .hd
      padding-bottom: 18px;
      margin: 0 0 20px 0;
      border-bottom: 1px solid #eee;
      strong
        font-size: 24px;
        color: #444;
        font-weight: normal;
    .info-form
      margin-top 20px
      .origin-photo
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
        img
          width: 100%;
          height: 100%;
</style>
