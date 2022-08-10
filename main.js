import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

import { myRequest } from 'utils/api.js'
Vue.prototype.$myRequest = myRequest
Vue.filter('formatDate',(data)=>{
	const date = new Date(data)
	const day = date.getMonth().toString().padStart(2, '0') + '-' + date.getDay().toString().padStart(2, '0')
	return date.getFullYear() + '-' + day
})

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif