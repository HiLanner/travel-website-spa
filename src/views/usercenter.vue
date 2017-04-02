<template>
  <top-bar></top-bar>
  <div class="map">
    <img src="../assets/img03.jpeg"/>
  </div>
  <div class="user-menu">
    <Menu mode="horizontal" active-key="1">
      <div class="layout-assistant">
        <Menu-item key="1" data-tab="1" v-on:click="showTab">个人主页</Menu-item>
        <Menu-item key="2" data-tab="2" v-on:click="showTab">我的游记</Menu-item>
        <Menu-item key="3" data-tab="3" v-on:click="showTab">我的路线</Menu-item>
        <Menu-item key="4" data-tab="4" v-on:click="showTab">我的提问</Menu-item>
        <Menu-item key="5" data-tab="5" v-on:click="showTab">我的回答</Menu-item>
      </div>
    </Menu>
  </div>
  <div class="container">
    <Row>
      <i-col span="6">
        <div class="user-basic-infor">
          <div class="avatarImg">
            <img src="../assets/photo.jpeg"/>
          </div>
          <h2>我是瘦子呀<a class="edit" href="editUserCenter.vue">编辑</a></h2>
          <span><Icon type="edit"></Icon> 游记 共<a href=""> 1</a></span>
          <span><Icon type="edit"></Icon> 路线 共<a href=""> 1</a></span>
          <span><Icon type="edit"></Icon> 提问 共<a href=""> 1</a></span>
          <span><Icon type="edit"></Icon> 回答 共<a href=""> 1</a></span>
        </div>
      </i-col>
      <i-col span="18">
        <div class="write">
          <ul class="clearfix" @click="test">
            <li data-num="1"><a v-link="'/strategy/create'"><Icon type="ios-grid-view-outline"></Icon><span>写游记</span></a></li>
            <li data-num="2"><a v-link="'/roadline/create'"><Icon type="android-walk"></Icon><span>记路线</span></a></li>
            <li data-num="3"><a v-link="'/community/ask'"><Icon type="android-add"></Icon><span>提问</span></a></li>
          </ul>
        </div>
        <div class="main-con">
          <div class="main main-1" v-show="show.tab1">
            <div class="main-content main-content-strategy">
              <h3>热门游记</h3>
              <div class="strategy-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="strategy-tit">这是日记标题</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="strategy-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a v-link="'/strategy/123'" class="move">查看详情</a>
            </div>
            <div class="main-content main-con-roadline">
              <h3>热门路线</h3>
              <div class="roadline-infor">
                <h2 class="roadline-tit">这是路线标题</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="roadline-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a v-link="'destination/123/line/123'" class="move">查看详情</a>
            </div>
            <div class="main-content main-content-answer">
              <h3>热门回答</h3>
              <div class="answer-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="answer-tit">这是问题内容</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="answer-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a v-link="'community/question/123'" class="move">查看详情</a>
            </div>
          </div>
          <div class="main main-2" v-show="show.tab2">
            <div class="main-content main-content-strategy">
              <div class="strategy-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="strategy-tit">这是日记标题</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="strategy-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a v-link="'/strategy/123'" class="move">查看详情</a>
            </div>
            <div class="main-content main-content-strategy">
              <div class="strategy-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="strategy-tit">这是日记标题</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="strategy-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a href="" class="move">查看详情</a>
            </div>
            <div class="main-content main-content-strategy">
              <div class="strategy-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="strategy-tit">这是日记标题</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="strategy-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a href="" class="move">查看详情</a>
            </div>
            <div class="main-content main-content-strategy">
              <div class="strategy-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="strategy-tit">这是日记标题</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="strategy-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a href="" class="move">查看详情</a>
            </div>
            <div class="btn">
              <i-button type="primary"><Icon type="ios-arrow-down"></Icon>  加载更多</i-button>
            </div>
          </div>
          <div class="main main-3" v-show="show.tab3">
            <div class="main-content main-con-roadline">
              <div class="roadline-infor">
                <h2 class="roadline-tit">这是路线标题</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="roadline-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a v-link="'destination/123/line/123'" class="move">查看详情</a>
            </div>
            <div class="main-content main-con-roadline">
              <div class="roadline-infor">
                <h2 class="roadline-tit">这是路线标题</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="roadline-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a href="" class="move">查看详情</a>
            </div>
            <div class="main-content main-con-roadline">
              <div class="roadline-infor">
                <h2 class="roadline-tit">这是路线标题</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="roadline-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a href="" class="move">查看详情</a>
            </div>
            <div class="main-content main-con-roadline">
              <div class="roadline-infor">
                <h2 class="roadline-tit">这是路线标题</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="roadline-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a href="" class="move">查看详情</a>
            </div>
            <div class="btn">
              <i-button type="primary"><Icon type="ios-arrow-down"></Icon>  加载更多</i-button>
            </div>
          </div>
          <div class="main main-4" v-show="show.tab4">
            <div class="main-content main-content-question">
              <div class="question-infor">
                <h2>Q:西湖哪里好玩</h2>
                <div class="tag">
                  <Tag>标签一</Tag>
                  <Tag>标签二</Tag>
                  <Tag>标签二</Tag>
                </div>
                <div class="hudong">
                  <span>创建于2017-03-19 13:40:11</span>
                  <span>浏览 1111</span>
                  <span>回答 1111</span>
                </div>
              </div>
            </div>
            <div class="main-content main-content-question">
              <div class="question-infor">
                <h2>Q:西湖哪里好玩</h2>
                <div class="tag">
                  <Tag>标签一</Tag>
                  <Tag>标签二</Tag>
                  <Tag>标签二</Tag>
                </div>
                <div class="hudong">
                  <span>创建于2017-03-19 13:40:11</span>
                  <span>浏览 1111</span>
                  <span>回答 1111</span>
                </div>
              </div>
            </div>
            <div class="main-content main-content-question">
              <div class="question-infor">
                <h2>Q:西湖哪里好玩</h2>
                <div class="tag">
                  <Tag>标签一</Tag>
                  <Tag>标签二</Tag>
                  <Tag>标签二</Tag>
                </div>
                <div class="hudong">
                  <span>创建于2017-03-19 13:40:11</span>
                  <span>浏览 1111</span>
                  <span>回答 1111</span>
                </div>
              </div>
            </div>
            <div class="main-content main-content-question">
              <div class="question-infor">
                <h2>Q:西湖哪里好玩</h2>
                <div class="tag">
                  <Tag>标签一</Tag>
                  <Tag>标签二</Tag>
                  <Tag>标签二</Tag>
                </div>
                <div class="hudong">
                  <span>创建于2017-03-19 13:40:11</span>
                  <span>浏览 1111</span>
                  <span>回答 1111</span>
                </div>
              </div>
            </div>
            <div class="main-content main-content-question">
              <div class="question-infor">
                <h2>Q:西湖哪里好玩</h2>
                <div class="tag">
                  <Tag>标签一</Tag>
                  <Tag>标签二</Tag>
                  <Tag>标签二</Tag>
                </div>
                <div class="hudong">
                  <span>创建于2017-03-19 13:40:11</span>
                  <span>浏览 1111</span>
                  <span>回答 1111</span>
                </div>
              </div>
            </div>
            <div class="main-content main-content-question">
              <div class="question-infor">
                <h2>Q:西湖哪里好玩</h2>
                <div class="tag">
                  <Tag>标签一</Tag>
                  <Tag>标签二</Tag>
                  <Tag>标签二</Tag>
                </div>
                <div class="hudong">
                  <span>创建于2017-03-19 13:40:11</span>
                  <span>浏览 1111</span>
                  <span>回答 1111</span>
                </div>
              </div>
            </div>
            <div class="btn">
              <i-button type="primary"><Icon type="ios-arrow-down"></Icon>  加载更多</i-button>
            </div>
          </div>
          <div class="main main-5" v-show="show.tab5">
            <div class="main-content main-content-answer">
              <div class="answer-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="answer-tit">这是问题内容</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="answer-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a v-link="'community/question/123'" class="move">查看详情</a>
            </div>
            <div class="main-content main-content-answer">
              <div class="answer-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="answer-tit">这是问题内容</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="answer-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a v-link="'community/question/123'" class="move">查看详情</a>
            </div>
            <div class="main-content main-content-answer">
              <div class="answer-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="answer-tit">这是问题内容</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="answer-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a v-link="'community/question/123'" class="move">查看详情</a>
            </div>
            <div class="main-content main-content-answer">
              <div class="answer-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="answer-tit">这是问题内容</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="answer-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a href="" class="move">查看详情</a>
            </div>
            <div class="main-content main-content-answer">
              <div class="answer-infor">
                <img src="../assets/img03.jpeg">
                <h2 class="answer-tit">这是问题内容</h2>
                <span class="time">2017-03-19 13:40:11</span>
                <span class="fr user-answer">回答 1111</span>
                <span class="fr user-view">浏览 1111</span>
              </div>
              <div class="answer-con">
                很久没有去过新宿了，上周去了一趟新宿，新宿西口和东口经常会有人做演讲以及宣传，西口呢，就是宣扬台湾独立的，标题就是“抵制XX国家入侵台湾”和“要台湾不要中华台北”。也许是闲的蛋疼。另外东口就是我上传的这个照片。简单的说就是福岛小孩儿的甲状腺癌患者已经达到了183名。至于是真是假，我个人无从考证。也没经历去考证。不过相信应该不会无风不起浪吧。

                但是你说日本还能不能来完呢，这个因人而异了。如果你还怀着那种忐忑的心情，一边玩，一边担心，那么就不要来了。真的。出来完就是开心，如果还提心吊胆的话，那么就还是不要来了。要不然一出机场就，阿姨有，阿姨有，岂不是扰民，不过优点就是你唱阿姨有的话，别人也不知道你是哪个国家来的。
              </div>
              <a href="" class="move">查看详情</a>
            </div>
            <div class="btn">
              <i-button type="primary"><Icon type="ios-arrow-down"></Icon>  加载更多</i-button>
            </div>
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
      return {
        show: {
          tab1: true,
          tab2: false,
          tab3: false,
          tab4: false,
          tab5: false
        }
      }
    },
    components: {
      topBar,
      footerr
    },
    methods: {
      showTab (e) {
        let tab = 'tab' + e.target.dataset.tab
        console.log(tab)
        for (var i in this.show) {
          if (i !== tab) {
            this.show[i] = false
          }
        }
        this.show[tab] = true
      },
      test (e) {
        console.log(e.target.dataset.num)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .clearfix::after
    content ''
    clear both
    height 0
    overflow hidden
    display block
  .map
    img
      height 400px
      width 100%
  .layout-assistant{
    width: 500px;
    margin: 0 auto;
    height: inherit;
  }
  .container
    margin-top 10px
    padding 0 160px
    position relative
    .user-basic-infor
      width 120px
      position relative
      margin 0 auto
      .avatarImg
        height 70px
        position relative
        img
          position relative
          top -70px
          bottom 0
          z-index 20
          border-radius 120px
          vertical-align middle
          width 120px
          height 120px
      h2
        width 130px
      .edit
        float right
        font-weight 300
        font-size 12px
        line-height 28px
      span
        text-align center
        display block
    .write
      padding: 20px 0 17px;
      position: relative;
      ul li
        float left
        width 25%
        position relative
        text-align center
        a
          font-size 20px
        span
          font-size 20px
    .main-con
      .main
        position relative
        h3
          color #9ea7b4
          line-height 50px
      .main,.main-1
        .main-content
          margin-bottom 15px
          padding 10px 0
          background #f5f7f9
          padding 15px
          position relative
          img
            width 100%
            height 300px
          h2
            line 30px
          span
            line-height 24px
          .fr
            float right
          a
            position absolute
            bottom 10px
            right 15px
  .btn
    text-align center
    button
      background #fff
      color #3399ff
      border-color #3399ff
  .tag
    margin-top 20px
  .hudong
    margin-top 15px
</style>
