import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import moment from 'moment';



Vue.config.productionTip = false;

Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('MM/DD')
  }
});

Vue.filter('formatCardNuber', function(value) {
  if (value) {
    return String(value).substring(12);
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
