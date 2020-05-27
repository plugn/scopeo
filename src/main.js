import 'spectrum-ui-vue/lib/SpectrumUIVue.css'
import Vue from 'vue'
import SpectrumUIVue from 'spectrum-ui-vue'
import VueLive from 'vue-live'
import router from './router'
import App from './components/App.vue'
import MdView from './scopeo/MdView'
import LiveCode from './scopeo/LiveCode'

Vue.use(SpectrumUIVue)
Vue.use(VueLive)
Vue.component('MdView', MdView)
Vue.component('LiveCode', LiveCode)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
