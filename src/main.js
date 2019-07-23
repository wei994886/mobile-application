import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
import relativeTime from './filters/relative-time'
import checkLogin from './utils/check-login'
import AppTabbar from './components/app-tabbar'

/**
 * 这个第三包引入即可，它会自动根据页面宽度设置网页基准字体大小
 */
import 'amfe-flexible'

/**
 * 现在我们简单粗暴全引进来，方便使用
 */
// import Vant from 'vant'
// import { Lazyload } from 'vant'

// 等价于上面的两句代码写法
import Vant, { Lazyload } from 'vant'

import 'vant/lib/index.css'

Vue.component('app-tabbar', AppTabbar)

// 注册 Vant 的图片懒加载自定义指令
Vue.use(Lazyload)

// 注册一个全局过滤器：处理相对时间
Vue.filter('relativeTime', relativeTime)

Vue.use(VeeValidate, {
  events: '' // 禁用默认事件验证
  // events: 'change'
})

Validator.localize('zh_CN', zhCN)

Vue.use(Vant)

/**
 * 后面我们再配置为按需引入的方式（减小代码打包体积）
 */
// import {
//   Button,
//   Tabbar,
//   TabbarItem
// } from 'vant'

// Vue
//   .use(Button)
//   .use(Tabbar)
//   .use(TabbarItem)

Vue.prototype.$sleep = time => {
  return new Promise((resolve, reject) => {
    window.setTimeout(resolve, time)
  })
}

// 将检查登录状态挂载到 Vue 原型对象上，这样的话任何组件就都可以使用了
Vue.prototype.$checkLogin = checkLogin

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
