<template>
  <div class="card">
    <Card style="width:300px">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        攻略推荐
      </p>
      <a href="#" slot="extra" @click.prevent="changeLimit">
        <Icon type="ios-loop-strong"></Icon>
        换一换
      </a>
      <ul>
        <li v-for="item in movieList | limitBy limitNum limitFrom">
          <a :href="item.url" target="_blank">{{ item.name }}</a>
          <span>
            <Icon type="heart"></Icon>
            {{ item.rate }}
          </span>
        </li>
      </ul>
    </Card>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        limitNum: 8,
        limitFrom: 0,
        movieList: [
          {
            name: '肖申克的救赎',
            url: 'https://movie.douban.com/subject/1292052/',
            rate: 9.6
          },
          {
            name: '这个杀手不太冷',
            url: 'https://movie.douban.com/subject/1295644/',
            rate: 9.4
          },
          {
            name: '霸王别姬',
            url: 'https://movie.douban.com/subject/1291546/',
            rate: 9.5
          },
          {
            name: '阿甘正传',
            url: 'https://movie.douban.com/subject/1292720/',
            rate: 9.4
          },
          {
            name: '美丽人生',
            url: 'https://movie.douban.com/subject/1292063/',
            rate: 9.5
          },
          {
            name: '千与千寻',
            url: 'https://movie.douban.com/subject/1291561/',
            rate: 9.2
          },
          {
            name: '辛德勒的名单',
            url: 'https://movie.douban.com/subject/1295124/',
            rate: 9.4
          },
          {
            name: '海上钢琴师',
            url: 'https://movie.douban.com/subject/1292001/',
            rate: 9.2
          },
          {
            name: '机器人总动员',
            url: 'https://movie.douban.com/subject/2131459/',
            rate: 9.3
          },
          {
            name: '盗梦空间',
            url: 'https://movie.douban.com/subject/3541415/',
            rate: 9.2
          },
          {
            name: '辛德勒的名单',
            url: 'https://movie.douban.com/subject/1295124/',
            rate: 9.4
          },
          {
            name: '海上钢琴师',
            url: 'https://movie.douban.com/subject/1292001/',
            rate: 9.2
          },
          {
            name: '机器人总动员',
            url: 'https://movie.douban.com/subject/2131459/',
            rate: 9.3
          },
          {
            name: '盗梦空间',
            url: 'https://movie.douban.com/subject/3541415/',
            rate: 9.2
          }
        ]
      }
    },
    methods: {
      changeLimit () {
        this.limitFrom = this.limitFrom === 0 ? 8 : 0
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  a
    color #657180
  .card
    margin-bottom 20px
  span
    float right
</style>
