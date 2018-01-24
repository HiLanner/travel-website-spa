import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
Vue.use(iView)
Vue.prototype.$http = axios
router.start(App, '#app')
