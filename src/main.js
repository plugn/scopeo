import 'spectrum-ui-vue/lib/SpectrumUIVue.css'
import Vue from 'vue'
import router from './router'
import SpectrumUIVue from 'spectrum-ui-vue'
import App from './components/App.vue'

Vue.use(SpectrumUIVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
