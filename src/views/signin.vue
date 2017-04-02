<template>
  <div class="border">
    <div class="header">
      <div class="layout-logo"></div>
      <span>登录</span>
    </div>
    <div class="con"  type="flex" justify="center" class="code-row-bg">
      <i-form v-ref:form-inline :model="formInline" :rules="ruleInline" inline>
        <Form-item prop="user">
          <i-input type="text" :value.sync="formInline.user" style="width: 300px" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </Form-item>
        <Form-item prop="password">
          <i-input type="password" :value.sync="formInline.password" style="width: 300px" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </i-input>
        </Form-item>
        <Form-item>
          <i-button type="primary" @click="handleSubmit('formInline')">登录</i-button>
        </Form-item>
      </i-form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
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
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .border
    margin 100px auto
    padding 20px
    border 2px solid #5cadff
    width 400px
    height 300px
    border-radius 5px
    .header
      padding 15px
      span
        font-size 20px
        color #3399ff
    .con
      width 300px
      form
        margin 0 auto
</style>

