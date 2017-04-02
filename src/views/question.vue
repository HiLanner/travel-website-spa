<template>
  <top-bar></top-bar>
  <div class="main">
    <Breadcrumb>
      <Breadcrumb-item href="#">首页</Breadcrumb-item>
      <Breadcrumb-item href="#">社区</Breadcrumb-item>
      <Breadcrumb-item>问题</Breadcrumb-item>
    </Breadcrumb>
    <div class="content">
      <Row :gutter="56">
        <i-col span="18">
          <div class="question">
            <div class="Q-hd">
              <h2><Icon type="help" color="#3399ff" size="20px"></Icon>&nbsp;&nbsp;&nbsp;西湖什么时候最美？最佳观赏地点在哪儿</h2>
              <div class="Q-user-infor">
                <a href="" class="photo" target="_blank"><img src="../assets/photo.jpeg"/></a>
                <a href="#" class="name">我是瘦子</a>
                <span class="time">2016-10-26 13:55:05</span>
              </div>
              <div class="Q-desc">
                <p>如题，挺喜欢去故宫玩儿的，可是每次都乌泱乌泱乌泱一群人在周围，上朝也没这么挤啊，请教大家有没有什么时候去过人比较少的~</p>
              </div>
              <tag></tag>
              <div class="Q-operate">
                <div class="fr">
                  <span class="user-view">浏览 1111</span>
                  <span class="user-answer">回答 1111</span>
                  <i-button type="primary">我要回答</i-button>
                </div>
              </div>
            </div>
            <div class="answer">
              <div class="answer-hd">
                <span>245</span>个回答
              </div>
              <div class="answer-body">
                <div class="answer-list">
                  <div class="answer-info clearfix">
                    <div class="user-bar fl">
                      <a class="avatar" href="#" target="_blank">
                        <img src="../assets/photo.jpeg">
                      </a>
                      <a class="name">我是瘦子</a>
                    </div>
                  </div>
                  <div class="instance" v-show="!expand">
                    <div class="img">
                      <img src="../assets/beijing.jpeg">
                    </div>
                    <p>看到这个问题好想先大笑三声哈哈哈！ 正常情况你看到的故宫应该是这样的： 这样的： 如果你赶上节假日或者周末，
                      那故宫会变成这样的： 面对人满为患的故宫，2013年的时候故宫博物院前副院长李季先生的一场讲座正好提到这个话题，
                      并且展示了历年全年游客流量数据图。 于是正确答案是： ...<a class="expand-btn" @click="expand = !expand">展示全部</a></p>
                  </div>
                  <div class="expand" v-show="expand">
                    看到这个问题好想先大笑三声哈哈哈！ 正常情况你看到的故宫应该是这样的： 这样的： 如果你赶上节假日或者周末，
                    那故宫会变成这样的： 面对人满为患的故宫，2013年的时候故宫博物院前副院长李季先生的一场讲座正好提到这个话题，
                    并且展示了历年全年游客流量数据图。 于是正确答案是：<br>
                    <img src="../assets/beijing.jpeg">
                    看到这个问题好想先大笑三声哈哈哈！ 正常情况你看到的故宫应该是这样的： 这样的： 如果你赶上节假日或者周末，
                    那故宫会变成这样的： 面对人满为患的故宫，2013年的时候故宫博物院前副院长李季先生的一场讲座正好提到这个话题，
                    并且展示了历年全年游客流量数据图。 于是正确答案是：<br>
                    <img src="../assets/beijing.jpeg">
                    看到这个问题好想先大笑三声哈哈哈！ 正常情况你看到的故宫应该是这样的： 这样的： 如果你赶上节假日或者周末，
                    那故宫会变成这样的： 面对人满为患的故宫，2013年的时候故宫博物院前副院长李季先生的一场讲座正好提到这个话题，
                    并且展示了历年全年游客流量数据图。 于是正确答案是：<br>
                    <img src="../assets/beijing.jpeg">
                  </div>
                  <div class="operate">
                    <div class="cmt-toggle" @click="commitModal = !commitModal"><Icon type="chatbox-working"></Icon> 23条评论</div>
                    <div class="time">
                      <span>发布于 2016-07-13 11:58</span>
                    </div>
                  </div>
                  <div class="commits" v-if="commitModal">
                    <b class="arrow"><i></i></b>
                    <ul class="commit-list">
                      <li class="commit-item">
                        <div class="commit-user">
                          <a href="#" target="_blank">
                            <img src="../assets/photo.jpeg">
                          </a>
                        </div>
                        <dl>
                          <dt>
                            <a href="#">我是瘦子</a>："我是评论"
                          </dt>
                          <dd>
                            <span class="time">2016-07-24 07:27</span>
                          </dd>
                        </dl>
                      </li>
                      <li class="commit-item">
                        <div class="commit-user">
                          <a href="#" target="_blank">
                            <img src="../assets/photo.jpeg">
                          </a>
                        </div>
                        <dl>
                          <dt>
                            <a href="#">我是瘦子</a>："我是评论"
                          </dt>
                          <dd>
                            <span class="time">2016-07-24 07:27</span>
                          </dd>
                        </dl>
                      </li>
                      <li class="commit-item">
                        <div class="commit-user">
                          <a href="#" target="_blank">
                            <img src="../assets/photo.jpeg">
                          </a>
                        </div>
                        <dl>
                          <dt>
                            <a href="#">我是瘦子</a>："我是评论"
                          </dt>
                          <dd>
                            <span class="time">2016-07-24 07:27</span>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                    <div class="commit-add clearfix">
                      <div class="commit-con">
                        <div class="words">
                          <textarea></textarea>
                          <p class="words-count">0/200</p>
                        </div>
                        <button type="primary" class="reply-btn">回复</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </i-col>
        <i-col span="6">
          <div class="slider">
            <div class="btn-question">
              <a v-link="'/community/ask'" target="_blank">我要提问</a>
            </div>
            <div class="relative-Q"></div>
            <Card dis-hover>
              <p slot="title">相关问题</p>
              <p><a href="#">相关问题</a></p>
              <p><a href="#">相关问题</a></p>
              <p><a href="#">相关问题</a></p>
              <p><a href="#">相关问题</a></p>
              <p><a href="#">相关问题</a></p>
              <p><a href="#">相关问题</a></p>
            </Card>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
  <footerr></footerr>
</template>
<script>
  import tag from '../components/tag.vue'
  import topBar from '../components/topBar.vue'
  import footerr from '../components/footer.vue'
  export default {
    data () {
      return {
        commitModal: false,
        expand: false
      }
    },
    components: {
      tag,
      topBar,
      footerr
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .main
    margin-top 10px
    padding 0 160px
    position relative
  .content
    margin-top 20px
    .question
      .Q-hd
        h2
          display inline
          font-size 18px
          color #333
        .Q-user-infor
          line-height: 22px
          float right
          a
            font-size 12px
            img
              width 16px
              height 16px
              border-radius 50%
              margin-right 6px
              vertical-align middle
        .Q-desc
          padding 15px
        .Q-operate
          margin-top 20px
          padding-top 18px
          border-top 1px solid #e5e5e5
          position relative
          .fr
            float right
      .answer
        margin-top: 60px
        .answer-hd
          padding-bottom: 5px;
          border-bottom: 1px solid #e5e5e5;
          color: #333;
        .answer-body
          .answer-list
            padding: 20px 0;
            border-bottom: 1px solid #e5e5e5;
            .answer-info
              height: 48px;
              margin-bottom: 12px;
              .user-bar
                line-height 20px
                a.avatar
                  margin-right: 10px;
                  display: inline-block;
                  width: 48px;
                  height: 48px;
                  border-radius: 50%;
                  overflow: hidden;
                  vertical-align: middle;
                  img
                    height 100%
                    width 100%
                a.name
                  margin-left 5px
            .instance
              line-height: 25px;
              font-size: 14px;
              word-break: break-all;
              .img
                float: left;
                margin-right: 10px;
                width: 150px;
                height: 100px;
                background-size: cover;
                img
                  width 100%
                  height 100%
            .expand
              line-height 25px
              font-size 14px
              img
                display block
                width 100%
                padding 10px 0
            .operate
              margin-top: 14px;
              height: 24px;
              position: relative;
              cursor pointer
              .cmt-toggle,.time
                display: inline-block;
                font-size: 12px;
                line-height: 14px;
                float: left;
                // border-right: 1px solid #e5e5e5;
                padding: 0 10px;
                margin-top: 5px;
                color: #999;
            .commits
              margin-top: 14px;
              border: 1px solid #e5e5e5;
              position: relative;
              .arrow
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-bottom: 6px solid #e5e5e5;
                position: absolute;
                left: 35px;
                top: -6px;
                i
                  width: 0;
                  height: 0;
                  border-left: 6px solid transparent;
                  border-right: 6px solid transparent;
                  border-bottom: 6px solid #fff;
                  position: absolute;
                  left: -6px;
                  top: 1px;
              .commit-list
                margin: 0 14px;
                .commit-item
                  padding: 12px 0 8px 40px;
                  border-bottom: 1px solid #e5e5e5;
                  line-height: 20px;
                  .commit-user
                    margin: 4px 0 0 -40px;
                    float: left;
                    width: 32px;
                    height: 32px;
                    a
                      color: #3399ff;
                      text-decoration: none;
                      cursor: pointer;
                      img
                        display: block;
                        width: 100%;
                        height: 100%;
                  dl
                    font-size: 12px;
                    dt
                      a
                        margin-right: 6px;
              .commit-add
                padding: 15px;
                background-color: #f6f6f6;
                .words
                  textarea
                    width: 656px;
                    height: 60px;
                    padding: 2px 5px;
                    background-color: #fff;
                    border: 1px solid #e5e5e5;
                    border-radius: 4px;
                    resize: none;
                    font-size: 12px;
                    line-height: 20px;
                    margin-bottom: 9px;
                    outline none
                  .words-count
                    float: left;
                    font-size: 12px;
                    line-height: 36px;
                    color: #999;
                .reply-btn
                  float: right;
                  width: 70px;
                  height: 30px;
                  background-color: #3399ff;
                  border-radius: 4px;
                  font-size: 14px;
                  text-align: center;
                  line-height: 30px;
                  color: #fff;
                  padding: 0;
                  border: 0;
    .slider
      .btn-question
        a
          display: block;
          width: 200px;
          height: 46px;
          background-color: #3399ff;
          border-radius: 4px;
          font-size: 16px;
          text-align: center;
          line-height: 46px;
          color: #fff;
      .relative-Q
        margin-top 20px
  .clearfix:after
    content: '\20';
    clear: both;
    display: block;
</style>
