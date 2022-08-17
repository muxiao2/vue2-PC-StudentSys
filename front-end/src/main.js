// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import service from './service'
import * as echarts from 'echarts'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import DatePicker from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
// Vue.use(DatePicker);
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// Vue.config.productionTip = false;

Vue.use(Antd);

// 导入图标4、5
// import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
Vue.config.productionTip = false
Vue.prototype.service = service //service挂载到原型上
Vue.prototype.$echarts = echarts //echarts挂载到原型上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


