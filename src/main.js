// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueAxios, axios, VueFire)

Vue.axios.defaults.baseURL = 'https://progressive-web-app-be867.firebaseio.com/';

Vue.config.productionTip = false

import store from './store/store';

const itemsRef = new Firebase('https://progressive-web-app-be867.firebaseio.com/')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    data: itemsRef.limitToLast(25)
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})

// <script
//   src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js">

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDd3wwVthxZRercXD1zfPVKgLTp33WtDKI",
    authDomain: "progressive-web-app-be867.firebaseapp.com",
    databaseURL: "https://progressive-web-app-be867.firebaseio.com",
    projectId: "progressive-web-app-be867",
    storageBucket: "progressive-web-app-be867.appspot.com",
    messagingSenderId: "1049004695038"
  };
  firebase.initializeApp(config);
