import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VuejsDialog from 'vuejs-dialog';
// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';


Vue.use(VuejsDialog)
import VueSweetalert2 from "vue-sweetalert2";

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};
Vue.use(VueSweetalert2, options);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
