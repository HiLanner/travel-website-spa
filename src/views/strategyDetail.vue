<template>
  <top-bar></top-bar>
  <div class="set-bg">
    <img src="../assets/set-bg.jpeg"/>
  </div>
  <div class="view-info">
    <div class="vi-con">
      <h1>行摄湘西——张家界、凤凰五日游全攻略</h1>
    </div>
    <div class="view-title clearfix">
      <div class="view-center">
        <div class="person">
          <a href="#" class="per_pic">
            <img src="../assets/photo.jpeg"/>
          </a>
          <strong>
            <a href="#" target="_blank" class="per_name">我是瘦子</a>
          </strong>
          <div class="vc_time">
            <span class="time">2016-03-02 23:18</span>
            <span>1000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main">
    <div class="clearfix">
      <Row :gutter="80">
        <i-col span="18">
          <div class="v-article">
            <div class="article-tit">
              <h2>湘西旅行的顶级体验</h2>
            </div>
            <p>金鞭溪</p>
            <div class="add_pic">
              <img src="../assets/test.jpeg" />
            </div>
            <div class="article-tit">
              <h2>湘西旅行的顶级体验</h2>
            </div>
            <p>金鞭溪</p>
            <div class="add_pic">
              <img src="../assets/test.jpeg" />
            </div>
            <div class="article-tit">
              <h2>湘西旅行的顶级体验</h2>
            </div>
            <p>金鞭溪</p>
            <div class="add_pic">
              <img src="../assets/test.jpeg" />
            </div>
          </div>
          <div class="commits">
            <div class="commit-item">
              <div class="commit-info">
                <div class="commit-photo">
                  <a href="#">
                    <img src="../assets/photo.jpeg"/>
                  </a>
                </div>
                <div class="commit-user">
                  <a href="#" class="name">
                    我是瘦子
                  </a>
                </div>
              </div>
              <div class="commit-con">
                <p>我是评论</p>
              </div>
              <div class="commit-bottom">
                <div class="time">2017-03-31</div>
                <div class="option">回复</div>
              </div>
              <div class="reply">
                <div class="reply-info">
                  <div class="reply-photo">
                    <img src='../assets/photo.jpeg'>
                  </div>
                  <div class="reply-user">
                    <div class="reply-content">
                      我是回复我是回复我是回复
                    </div>
                    <p><a href="#">我是瘦子</a><span class="time">2017-03-31</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </i-col>
        <i-col span="6">
          <div class="slider">
            <Card dis-hover>
              <p slot="title">相关游记攻略</p>
              <p><a href="#">卡片内容</a></p>
              <p><a href="#">卡片内容</a></p>
              <p><a href="#">卡片内容</a></p>
              <p><a href="#">卡片内容</a></p>
              <p><a href="#">卡片内容</a></p>
              <p><a href="#">卡片内容</a></p>
            </Card>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
  import topBar from '../components/topBar.vue'
  export default {
    components: {
      topBar
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .set-bg
    height 427px
    width 100%
    img
      width 100%
  .view-info
    width: 100%;
    height: 90px;
    position: relative;
    top -80px
    z-index: 15
    .vi-con
      width: 830px;
      padding: 0 0 10px 150px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      h1
        line-height: 80px;
    .view-title
      height: 80px;
      border-bottom: 1px solid #d7d7d7;
      box-shadow: 0 2px 0 rgba(0,0,0,0.05);
      position: relative;
      z-index: 16;
      .view-center
        width: 960px;
        margin: 0 auto;
        .person
          width: 480px;
          padding: 20px 0 0 150px;
          float: left;
          position: relative;
          a.per_pic
            width: 120px;
            height: 120px;
            position: absolute;
            top: -80px;
            left: 0;
            z-index: 88;
            img
              width 100%
              height: 100%
              border-radius: 50%;
          a.per_name
            color: #3399ff;
            font-size: 14px;
            font-weight: normal;
          .vc_time
            color: #acacac;
            display: inline;
            margin-left: 10px;
            span
              display: inline-block;
              margin-right: 10px;
  .main
    margin-top 10px
    padding 0 160px
    position relative
    .v-article
      border-bottom: 1px solid #e2e2e2;
      padding-bottom 30px
      .article-tit
        margin: 20px 0;
        position: relative;
        h2
          background: url("../assets/paragraph/ps1.gif") 0 0 no-repeat;
          text-align: center;
          line-height 95px
          span
            line-height: 95px;
            display: block;
      p
        margin-bottom: 20px;
        text-align: justify;
        word-break: break-all;
      .add_pic
        position: relative;
        background-color: #fff;
        margin-bottom: 18px;
        img
          height: 453px;
          width: 680px;
          background: rgb(252, 242, 220);
          display: block;
    .commits
      margin: 60px auto;
      .commit-item
        width: 100%;
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 24px;
        .commit-info
          width: 100%;
          height: 48px;
          line-height: 48px;
          background-color: #f6f6f6;
          border-top-left-radius: 24px;
          border-bottom-left-radius: 24px;
          .commit-photo
            width: 48px;
            height: 48px;
            border-radius: 50%;
            float: left;
            margin-right: 20px;
            position: relative;
            a img
              display: block;
              width: 100%;
              height: 100%;
              border-radius: 50%;
          .commit-user
            float: left;
            .name
              color: #3399ff
              margin-right: 6px
        .commit-con
          padding-left: 68px;
          margin-top: 12px;
          position: relative;
          p
            width: 486px;
            float: left;
            color: #666;
            font-size: 14px;
        .commit-bottom
          padding-left: 68px;
          height: 24px;
          line-height: 24px;
          color: #999;
          margin-top: 16px;
          .time
            float: left;
            margin-right: 12px;
          .option
            float: right;
            padding-right: 5px;
            color #3399ff
        .reply
          margin 15px 40px
          padding 5px 15px
          height 60px
          background #fcfcfc
          .reply-info
            margin-top 10px
            .reply-photo
              width 30px
              height 30px
              display inline-block
              img
                width 100%
                height 100%
                border-radius 50%
            .reply-user
              width 520px
              display inline-block
              margin-left 15px
    .slider
      margin-top 30px
  .clearfix:after
    content: '';
    clear: both;
    height: 0;
    display: block;
    overflow: hidden;
</style>
