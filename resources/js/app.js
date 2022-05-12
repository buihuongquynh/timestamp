import Vue from 'vue';
require('./bootstrap');

// window.Vue = require('vue');
import VCalendar from "v-calendar";
import {BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

 Vue.config.productionTip = false;

 Vue.component('daily-attendance', require('./components/DailyAttendance.vue').default);
 Vue.component('edit-timestamp', require('./components/EditTimestamp.vue').default);

 Vue.use(VCalendar);
 Vue.config.productionTip = false
 Vue.use(BootstrapVue);
 Vue.use(BootstrapVueIcons)
 window.Fire = new Vue();
const app = new Vue({
    el: '#app',
});
app.$mount('#app')
