<template>
  <top-bar></top-bar>
  <div class="main">
    <div class="position">
      <Breadcrumb>
        <Breadcrumb-item href="#">路线</Breadcrumb-item>
        <Breadcrumb-item>新建路线</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <Row :gutter="80">
      <i-col span="18">
        <i-form v-ref:form-custom :model="formCustom" :rules="ruleCustom" :label-width="80">
          <div class="road road-city">
            <h5>
              请选择目的地
            </h5>
            <Form-item label="城市" prop="city" class="form-width">
              <i-select :model.sync="formCustom.city" placeholder="请选择所在地">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
              </i-select>
            </Form-item>
          </div>
          <div class="road road-line">
            <h5>
              编辑每天路线
            </h5>
            <div class="edit" v-for="list in roadline">
              <div class="edit-area">
                <div class="edit-tit">
                  <i-button class="btn-edit" type="primary" size="small" @click="edit($index)">编辑</i-button>
                  <i-button class="btn-del" type="primary" size="small" @click="deleteRoad($index)">删除</i-button>
                  <h5>第 {{ $index+1 }} 天路线</h5>
                </div>
                <div class="edit-con">
                  <p class="road-preview">
                    D{{ $index+1 }}: <a class="place-detail" v-for="item in list"><span class="arrow" v-if="$index != 0">→</span><span>{{ item.place }} ( {{ item.time }} 小时)</span></a>
                  </p>
                  <div class="form">
                    <Form-item label="景点" prop="place" class="form-width">
                      <i-input :value.sync="formCustom.place" placeholder="请输入景点名称"></i-input>
                    </Form-item>
                    <Form-item label="耗时" prop="time" class="form-width">
                      <i-input type="text" :value.sync="formCustom.time" number></i-input>
                    </Form-item>
                  </div>
                </div>
                <div class="edit-operate">
                  <i-button type="primary" size="small" @click="createNewRoad">添加新路线</i-button>
                  <i-button type="primary" size="small" @click="handleSubmit('formCustom',$index)">添加地点</i-button>
                </div>
              </div>
            </div>
          </div>
          <i-button class="complete" type="primary" size="lg" @click="save">完成</i-button>
        </i-form>
        <Modal
          :visible.sync="editModal.show"
          title="编辑路线"
          @on-ok="saveEdit"
          @on-cancel="cancel">
          <i-form v-ref:form-inline inline v-for="item in editData">
            <Form-item label="景点">
              <Row>
                <i-col span="6">
                  <i-input type="text" :value.sync="item.place"></i-input>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="6">
                  <i-input type="number" :value.sync="item.time" number></i-input>
                </i-col>
                <i-col span="4" style="text-align: center">
                  <i-button @click="deletePlace($index)">删除</i-button>
                </i-col>
              </Row>
            </Form-item>
          </i-form>
        </Modal>
      </i-col>
      <i-col span="6">
        <div class="roadline-slider">
          <div class="roadline-tit">
            路线的正确姿势
          </div>
          <div class="roadline-con">
            <p>1.路线要【具体】【真实】路线之间距离应该较近，且交通方便到达</p>
            <p>2.越详细，越合理的路线更被大家接受哦</p>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
  <footerr></footerr>
</template>
<script>
import topBar from '../components/topBar.vue'
import footerr from '../components/footer.vue'
export default {
  data () {
    const validatePlace = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('景点不能为空'))
      }
    }
    const validateTime = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('时间不能为空'))
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          callback()
        }
      }, 1000)
    }
    return {
      count: 1,
      roadline: [],
      formCustom: {
        place: '',
        time: 0,
        city: ''
      },
      editData: [],
      editModal: {
        show: false,
        index: ''
      },
      ruleCustom: {
        place: [
          { validator: validatePlace, trigger: 'blur' }
        ],
        time: [
          { validator: validateTime, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    topBar,
    footerr
  },
  created () {
    this.initRoadLine()
  },
  methods: {
    initRoadLine (place, time) {
      let day = []
      this.roadline.push(day)
    },
    handleSubmit (name, index) {
      this.addPlace(index)
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.addPlace(index)
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
      this.$refs[name].resetFields()
    },
    addPlace (index) {
      let placeObj = {}
      placeObj.place = this.formCustom.place
      placeObj.time = this.formCustom.time
      this.roadline[index].push(placeObj)
      // this.formCustom.place = ''
      // this.formCustom.time = ''
    },
    createNewRoad () {
      this.initRoadLine()
    },
    edit (index) {
      if (index !== '') {
        this.editModal.show = true
        this.editModal.index = index
        this.editData = []
        let self = this
        // 深复制某天的路线到相应的editData中
        this.roadline[index].forEach(function (element) {
          let obj = {}
          for (var key in element) {
            if (element.hasOwnProperty(key)) {
              obj[key] = element[key]
            }
          }
          self.editData.push(obj)
        })
      }
    },
    deletePlace (index) {
      this.editData.splice(index, 1)
    },
    // 点击保存后将 roadline中相应的某天的路线更新editData的值
    saveEdit () {
      this.roadline.$set(this.editModal.index, [])
      let road = this.roadline[this.editModal.index]
      this.editData.forEach(function (element) {
        let obj = {}
        for (var key in element) {
          if (element.hasOwnProperty(key)) {
            obj[key] = element[key]
          }
        }
        road.push(obj)
      })
    },
    // 删除某天的路线
    deleteRoad (index) {
      if (this.roadline.length > 1) {
        this.roadline.splice(index, 1)
      } else {
        this.$Message.error('已经是第一天的路线了!')
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
    .road
      margin-top 40px
      h5
        height 30px
        font-size 18px
        font-weight normal
        line-height 30px
        color #333
        margin-top 20px
        margin-bottom 10px
      .edit-tit
        position relative
        h5
          font-size 16px
        .btn-edit
          position absolute
          right 360px
          top 0
        .btn-del
          position absolute
          right 300px
          top 0
      .edit-con
        .road-preview
          font-size 16px
          padding 10px
          margin-left 35px
        .form
          margin-top 20px
      .edit-operate
        margin-top 20px
        margin-left 40px
  .form-width
    width 400px
  .complete
    margin-top 30px
  .roadline-slider
    padding-top: 20px;
    .roadline-tit
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 20px;
    .roadline-con
      p
        margin-bottom: 24px;
        color: #999;
</style>
