<template>
  <div class="layout-breadcrumb">
    <Breadcrumb>
      <Breadcrumb-item href="#">游记攻略</Breadcrumb-item>
      <Breadcrumb-item>城市</Breadcrumb-item>
    </Breadcrumb>
  </div>
  <div class="city-intro">
    <h1>北京</h1>
    <p>北京简称京，是中国的首都，全国的政治、文化中心和国际交往的枢纽，也是一座著名的历史文化名城，与西安、洛阳、开封、南京、杭州并列为中国六大古都。
      北京具有丰富的旅游资源，对外开放的旅游景点达200多处，有世界上最大的皇宫紫禁城、祭天神庙天坛、皇家花园北海、皇家园林颐和园，还有八达岭、慕田峪、
      司马台长城以及世界上最大的四合院恭王府等各胜古迹。全市共有文物古迹7309项，其中国家文物保护单位42个，市级文物保护单位222个。北京的市树为国槐和侧柏，
      市花为月季和菊花。另外，北京出产的象牙雕刻、玉器雕刻、景泰蓝、地毯等传统手工艺品驰誉世界。</p>
  </div>
  <div class="main">
    <Row :gutter="32">
      <i-col span="6">
        <Card dis-hover>
          <p slot="title">相关城市</p>
          <p><a>杭州</a></p>
          <p><a>西安</a></p>
          <p><a>成都</a></p>
          <p><a>开封</a></p>
          <p><a>洛阳</a></p>
        </Card>
      </i-col>
      <i-col span="16">
        <div class="strategy-list">
          <h2><Icon type="ios-flame" color="#3399ff"></Icon> 攻略推荐</h2>
          <div>
            <a>
              <Card :bordered="false">
                <p slot="title">无边框标题aaa</p>
                <div class="content">
                  <Icon type="quote" size="large"></Icon>
                  4年的一个夏天，我仰面躺在地板上吃瓜吹空调，眼镜儿抱着个垃圾桶出门倒垃圾，路过我房门往里瞄了一眼，见我躺地上满面红光萌萌的模样，关切地问我是不是脑子来大姨妈了，我一口西瓜汁差点被他活活呛死！
                  拿了一张纸巾擦擦脸，觉得浑身上下黏黏糊糊，心里开始烦躁起来。这时候微信群上的 “师叔” 恰好发来照片，说自己刚徒步爬上江西的武功山，现在正在金顶呢，凉快得很，问我们山下的吃瓜群众是不是热得快裸奔了？反正是一副特得意的样子。

                  我问，叫啥山？
                  武功山！

                  武功山？学武术的地方？
                  ......

                  诶？你是去学武术吗？
                  <Icon type="quote"></Icon>
                </div>
              </Card>
            </a>
            <a href="www.baidu.com">
              <Card :bordered="false">
                <p slot="title">无边框标题</p>
                <div class="content">
                  <Icon type="quote" size="large"></Icon>
                  第一次写游记有点紧张，本人是日剧《孤独的美食家》狂热粉，属于2.5次元，日语属于能听能看能猜但不太能说的水平，之前去过两次日本，都是自己一个人，按照每年一次的传统，2016年8月再次向日本出发。
                  行程很简单，基本就是吃吃逛逛买买，照片也都是用手机拍的，对于第一次赴日的朋友可能没什么具体的帮助，亦想在这里能分享一些自己的心情。

                  一些不成熟的小建议：
                  1.机票酒店什么的就不啰嗦了，根据自己需要进行预订。每年我都住的是秋叶原华盛顿酒店，位置很棒，主要就是离秋叶原非常近。
                  2.suica卡和东京地铁三日通票是强烈推荐的，没有必要在国内买好，下飞机就能买非常方便。（有了地铁通票，想上厕所的时候随便找个地铁站就能进去上，毫无负担压马路）
                  3.现金，这次6天的行程的一共换了25W日元（因为比较喜欢用现金）全部用完。
                  4.想去吃小众餐馆的一定要预定（万能的淘宝）。
                  <Icon type="quote"></Icon>
                </div>
              </Card>
            </a>
            <a href="www.baidu.com">
              <Card :bordered="false">
                <p slot="title">无边框标题</p>
                <div class="content">
                  <Icon type="quote" size="large"></Icon>
                  4年的一个夏天，我仰面躺在地板上吃瓜吹空调，眼镜儿抱着个垃圾桶出门倒垃圾，路过我房门往里瞄了一眼，见我躺地上满面红光萌萌的模样，关切地问我是不是脑子来大姨妈了，我一口西瓜汁差点被他活活呛死！
                  拿了一张纸巾擦擦脸，觉得浑身上下黏黏糊糊，心里开始烦躁起来。这时候微信群上的 “师叔” 恰好发来照片，说自己刚徒步爬上江西的武功山，现在正在金顶呢，凉快得很，问我们山下的吃瓜群众是不是热得快裸奔了？反正是一副特得意的样子。

                  我问，叫啥山？
                  武功山！

                  武功山？学武术的地方？
                  ......

                  诶？你是去学武术吗？
                  <Icon type="quote"></Icon>
                </div>
              </Card>
            </a>
            <a href="www.baidu.com">
              <Card :bordered="false">
                <p slot="title">无边框标题</p>
                <div class="content">
                  <Icon type="quote" size="large"></Icon>
                  4年的一个夏天，我仰面躺在地板上吃瓜吹空调，眼镜儿抱着个垃圾桶出门倒垃圾，路过我房门往里瞄了一眼，见我躺地上满面红光萌萌的模样，关切地问我是不是脑子来大姨妈了，我一口西瓜汁差点被他活活呛死！
                  拿了一张纸巾擦擦脸，觉得浑身上下黏黏糊糊，心里开始烦躁起来。这时候微信群上的 “师叔” 恰好发来照片，说自己刚徒步爬上江西的武功山，现在正在金顶呢，凉快得很，问我们山下的吃瓜群众是不是热得快裸奔了？反正是一副特得意的样子。

                  我问，叫啥山？
                  武功山！

                  武功山？学武术的地方？
                  ......

                  诶？你是去学武术吗？
                  <Icon type="quote"></Icon>
                </div>
              </Card>
            </a>
            <a href="www.baidu.com">
              <Card :bordered="false">
                <p slot="title">无边框标题</p>
                <div class="content">
                  <Icon type="quote" size="large"></Icon>
                  4年的一个夏天，我仰面躺在地板上吃瓜吹空调，眼镜儿抱着个垃圾桶出门倒垃圾，路过我房门往里瞄了一眼，见我躺地上满面红光萌萌的模样，关切地问我是不是脑子来大姨妈了，我一口西瓜汁差点被他活活呛死！
                  拿了一张纸巾擦擦脸，觉得浑身上下黏黏糊糊，心里开始烦躁起来。这时候微信群上的 “师叔” 恰好发来照片，说自己刚徒步爬上江西的武功山，现在正在金顶呢，凉快得很，问我们山下的吃瓜群众是不是热得快裸奔了？反正是一副特得意的样子。

                  我问，叫啥山？
                  武功山！

                  武功山？学武术的地方？
                  ......

                  诶？你是去学武术吗？
                  <Icon type="quote"></Icon>
                </div>
              </Card>
            </a>
          </div>
          <div class="btn">
            <i-button type="primary"><Icon type="ios-arrow-down"></Icon>  加载更多</i-button>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .city-intro
    padding 30px 0
    border-bottom: 1px solid #e4e4e4;
    h1
      font-size 50px
      font-weight normal
  .main
    margin-top 30px
    .strategy-list
      h2
        border-bottom 2px solid #3399ff
        color: #3399ff
      .ivu-card
        margin-bottom 15px
        margin-top 15px
        .content
          color #657180
      .btn
        text-align center
        button
          background #fff
          color #3399ff
          border-color #3399ff
</style>
