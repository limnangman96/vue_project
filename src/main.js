// 애플리케이션의 설정 (플러그인, 라이브러리) 구조를 파악하는 파일
import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
