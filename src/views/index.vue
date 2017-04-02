<template>
  <Row :gutter="16">
        <i-col span="10">
          <div>
            <recommend></recommend>
            <recommend></recommend>
          </div>
        </i-col>
        <i-col span="14">
          <div>
            <Tabs>
              <Tab-pane icon="ios-flame" label="热门游记">
                <a v-link="'strategy/' + 123">
                  <Card>
                    <p slot="title">【围城随笔】之2017跨年武功山全线重装穿越 </p>
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
                <a v-link="'strategy/' + 123">
                  <Card>
                    <p slot="title">【围城随笔】之2017跨年武功山全线重装穿越 </p>
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
                <a v-link="'strategy/' + 123">
                  <Card>
                    <p slot="title">【围城随笔】之2017跨年武功山全线重装穿越 </p>
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
                <a v-link="'strategy/' + 123">
                  <Card>
                    <p slot="title">【围城随笔】之2017跨年武功山全线重装穿越 </p>
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
                <div class="page">
                  <Page :total="100" show-total></Page>
                </div>
              </Tab-pane>
              <Tab-pane icon="arrow-graph-up-right" label="最新游记">
                <a href="www.baidu.com">
                  <Card>
                    <p slot="title">【围城随笔】之2017跨年武功山全线重装穿越 </p>
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
                <Card>
                  <p slot="title">【围城随笔】之2017跨年武功山全线重装穿越 </p>
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
                <Card>
                  <p slot="title">【围城随笔】之2017跨年武功山全线重装穿越 </p>
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
                <Card>
                  <p slot="title">【围城随笔】之2017跨年武功山全线重装穿越 </p>
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
                <div class="page">
                  <Page :total="100" show-total></Page>
                </div>
              </Tab-pane>
            </Tabs>
            <div class="create">
              <i-button type="primary" size="small"><Icon type="plus-round"></Icon> 写游记</i-button>
            </div>
          </div>
        </i-col>
      </Row>
</template>
<script>
  import recommend from '../components/recommend .vue'
  export default{
    data () {
      return {
        select: ' 全部'
      }
    },
    components: {
      recommend
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .create
    position absolute
    right 10px
    top 5px
  .ivu-card
    margin-bottom 15px
  .content
    color #657180
  .page
    margin 0 auto
</style>
