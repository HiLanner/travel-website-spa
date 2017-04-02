# code-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

使用node+vue+mongodb重构旅游网站<strong>SPA</strong>
> ui框架使用的是iview，界面设计参考的是马蜂窝，感谢这些具有丰富创造力的大大们
- website(FE)

    - bulid                    #webpack架子的一些配置，不解释
    - config                   #webpack架子的一些配置，不解释
    - src                    #前端源码开发目录
        - styles            #css目录，按照页面（模块）、通用、第三方三个级别进行组织
            + page
            + common
            + lib
        + assets                #图片资源
        - components            #通用组件
            + footer.vue        #页脚
            + topBar.vue        ＃导航栏
            + tag.vue           #标签页
            + textarea.vue      #textarea编辑栏
            + slider.vue        #轮播组件
            + recommend.vue     #推荐栏 ps: 后期可能会取消
            + edit.vue          #编辑框
        - views                #页面组件
            - community         #社区相关
                + ask.vue         #提问编辑页
                + community       #社区主页
                + question        #问题详情页
            - destination       #目的地相关
                + city.vue      #城市
                + destination.vue     #目的地主页
                + readlineCreate.vue      #新建路线
                + roadline.vue        #某个城市的路线页
                + readlineDetail.vue      #路线详情页
            - strategy          #攻略相关
                + cityStrategy.vue      #某个城市的攻略
                + modify.vue            #攻略编辑页
                + startegy.vue          #攻略主页
                + strategyDetail.vue    #攻略详情
            + index.vue         #主页
            + layout.vue        ＃布局
            + setting.vue       ＃更改个人信息
            + signin.vue        ＃登陆
            + signup.vue        ＃注册
            + usercenter.vue    ＃个人中心
    + node_modules            #所使用的nodejs模块
    - routes.js               #页面路由
    package.json            #项目配置
    README.md                #项目说明

## 功能和路由设计    //后期或许会改

    - 注册
        1. 注册页: signup
    - 登录
        1. 登录页: signin
    - 个人信息
        1. 个人信息: usercenter/:userID
        2. 修改个人信息: setting
    - 攻略
        1. 所有的攻略: strategy
        2. 新建攻略: /strategy/create
        3. 某个城市相关的攻略: /strategy/city/:cityId
        4. 查看某条特定的攻略: /strategy/:strategyId
    - 目的地
        1. 所有的游记: GET/travelNote
        2. 特定用户发表的游记: GET/travelNote?user=?
        3. 某个城市相关的攻略: GET/travelNote?city=?
        4. 查看某条特定的攻略: POST/travelNote/:travelNoteID
    - 社区提问
        1. 社区主页（所有的问题）: /question
        2. 发布问题页: /community/ask
        3. 问题详情页: /community/question/:questionId
