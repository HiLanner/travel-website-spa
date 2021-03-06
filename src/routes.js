import layout from './views/layout.vue'
import index from './views/index.vue'
import signin from './views/signin.vue'
import signup from './views/signup.vue'
import setting from './views/setting.vue'
import usercenter from './views/usercenter.vue'
import strategy from './views/strategy/strategy.vue'
import cityStrategy from './views/strategy/cityStrategy.vue'
import modify from './views/strategy/modify.vue'
import strategyId from './views/strategy/strategyDetail.vue'
import destination from './views/destination/destination.vue'
import city from './views/destination/city.vue'
import roadline from './views/destination/roadline.vue'
import roadlineDetail from './views/destination/roadlineDetail.vue'
import roadlineCreate from './views/destination/readlineCreate.vue'
import community from './views/community/community.vue'
import ask from './views/community/ask.vue'
import question from './views/community/question.vue'

const routes = {
  '': {
    component: layout,
    subRoutes: {
      '/': {
        component: index
      },
      '/strategy': {
        component: strategy
      },
      '/strategy/city/:cityId': {
        component: cityStrategy,
        name: 'cityStrategy'
      },
      '/destination': {
        component: destination
      },
      '/destination/:cityId': {
        component: city,
        name: 'city',
        subRoutes: {
          '/': {
            component: roadline
          },
          '/line/:lineId': {
            component: roadlineDetail,
            name: 'line'
          }
        }
      },
      '/community': {
        component: community
      }
    }
  },
  '/signin': {
    component: signin
  },
  '/signup': {
    component: signup
  },
  '/setting': {
    component: setting
  },
  '/usercenter': {
    component: usercenter
  },
  '/strategy/create': {
    component: modify
  },
  '/community/ask': {
    component: ask
  },
  '/roadline/create': {
    component: roadlineCreate
  },
  'strategy/:strategyId': {
    component: strategyId,
    name: 'strategy'
  },
  'community/question/:questionId': {
    component: question,
    name: 'question'
  }
}

export default routes

