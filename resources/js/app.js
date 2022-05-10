import Vue from 'vue';
// window.Vue = require('vue');
import VCalendar from "v-calendar";
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 Vue.config.productionTip = false;

 Vue.component('daily-attendance', require('./components/DailyAttendance.vue').default);
 Vue.use(VCalendar);

const app = new Vue({
    el: '#app',
});
app.$mount('#app')
