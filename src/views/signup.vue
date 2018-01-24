<template>
  <div class="con">
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <Steps :current="current">
      <Step title="注册" content="请填写基本信息"></Step>
      <!--<Step title="验证" content="请输入收到的验证码"></Step>-->
      <Step title="完成" content="恭喜你，已完成"></Step>
    </Steps>
    <div class="form-con">
      <div class="step1" v-show="current == 0">
        <i-form
          :model="formValidate"
          label-position="left"
          :label-width="100"
          v-ref:form-validate
          :model="formInline"
          :rules="ruleValidate" inline>

          <Form-item label="邮箱" prop="mail">
            <i-input style="width: 300px" :value.sync="formValidate.mail"></i-input>
          </Form-item>
          <Form-item label="用户名"  prop="user">
            <i-input style="width: 300px" :value.sync="formValidate.user"></i-input>
          </Form-item>
          <Form-item label="密码"  prop="password">
            <i-input style="width: 300px" :value.sync="formValidate.password"></i-input>
          </Form-item>
          <Upload action="https://juejin.im/entry/599dad0ff265da248b04d7b8">
            <i-button type="ghost" icon="ios-cloud-upload-outline">上传文件</i-button>
          </Upload>
        </i-form>
      </div>
      <div class="step2" v-show="current == 1">
        <div class="finsh-step">
          <Icon type="checkmark" size="large" color="#3399ff"></Icon>
          <span>恭喜你，已全部完成～</span>
        </div>
      </div>
    </div>
    <i-button type="primary" @click="next">下一步</i-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        current: 0,
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        },
        formValidate: {
          user: '',
          password: '',
          email: '',
          code: ''
        },
        ruleValidate: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '请填写邮箱', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      next () {
        if (this.current === 1) {
          console.log(this.$http, 212114242141244)
          this.$http.post('/api/signup', this.formValidate).then(res => {
            console.log(res, 12321321321)
          }).catch(err => {
            console.log(err, 2323341431)
          })
        } else {
          this.current += 1
        }
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .con
    width 800px
    height 600px
    margin 100px auto 0
  .form-con
    padding 30px 0
  .code-tip
    margin 20px 0
  .finsh-step
    text-align center
</style>
