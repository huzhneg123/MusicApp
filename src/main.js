import Vue from 'vue'
import App from './App.vue'

// 引入路由器
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store'
// { Lazyload }

// 图片懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.use(Vant);
Vue.use(VueLazyLoad)

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
    // 安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})