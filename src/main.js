/*
 * @Author: TYW
 * @Date: 2022-04-10 16:28:43
 * @LastEditTime: 2022-04-10 17:51:19
 * @LastEditors: TYW
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'

import '@/thirdparty/Cesium181/Widgets/widgets.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
