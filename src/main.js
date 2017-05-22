// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueAxios, axios, VueFire)

Vue.axios.defaults.baseURL = 'https://awews-apps.firebaseio.com/';

Vue.config.productionTip = false

import store from './store/store';

// const itemsRef = new Firebase('https://progressive-web-app-be867.firebaseio.com/')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    app: firebase.initializeApp({
        apiKey: "AIzaSyBWLocxF1SXFFbkeXoa_x1emT5tgTuxcJo",
        authDomain: "awews-apps.firebaseapp.com",
        databaseURL: "https://awews-apps.firebaseio.com",
        projectId: "awews-apps",
        storageBucket: "awews-apps.appspot.com",
        messagingSenderId: "210313152347"
    }),
    // config: {
    //   apiKey: "AIzaSyBWLocxF1SXFFbkeXoa_x1emT5tgTuxcJo",
    //   authDomain: "awews-apps.firebaseapp.com",
    //   databaseURL: "https://awews-apps.firebaseio.com",
    //   projectId: "awews-apps",
    //   storageBucket: "awews-apps.appspot.com",
    //   messagingSenderId: "210313152347"
    // },
    data: 'todoList'
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})


  // const config = {
  //   apiKey: "AIzaSyBWLocxF1SXFFbkeXoa_x1emT5tgTuxcJo",
  //   authDomain: "awews-apps.firebaseapp.com",
  //   databaseURL: "https://awews-apps.firebaseio.com",
  //   projectId: "awews-apps",
  //   storageBucket: "awews-apps.appspot.com",
  //   messagingSenderId: "210313152347"
  // };
  // firebase.initializeApp(config);

  // var bigOne = document.getElementById('bigOne');
  // var dbRef = firebase.database().ref().child('text');
  // dbRef.on('value', snap => bigOne.innerText = snap.val());
  //
  // // Get elements
  // var txtEmail = document.getElementById('txtEmail');
  // var txtPassword = document.getElementById('txtPassword')
  // var btnLogin = document.getElementById('btnLogin')
  // var btnSignUp = document.getElementById('btnSignUp')
  // var btnLogout = document.getElementById('btnLogout')
  //
  // // Add login event
  // btnLogin.addEventListener('click', e => {
  //   //Get email and password
  //   const email = txtEmail.value;
  //   const pass = txtPassword.value;
  //   const auth = firebase.auth();
  //   //Sign in
  //   const promise = auth.signInWithEmailAndPassword(email, pass);
  //   promise.catch(e => console.log(e.message));
  // })
  //
  // btnSignUp.addEventListener('click', e => {
  //   //Get email and pass
  //   const email = txtEmail.value;
  //   const pass = txtPassword.value;
  //   const auth = firebase.auth();
  //   //Sign in
  //   const promise = auth.createUserWithEmailAndPassword(email, pass);
  //   promise.catch(e => console.log(e.message));
  // })
  //
  // btnLogout.addEventListener('click', e => {
  //   firebase.auth().signOut();
  // });
  //
  // // Add a realtime listener
  // firebase.auth().onAuthStateChanged(firebaseUser => {
  //   if(firebaseUser) {
  //     console.log(firebaseUser);
  //     btnLogout.classList.remove('hide');
  //     btnLogin.classList.add('hide');
  //     btnSignUp.classList.add('hide');
  //   } else {
  //     console.log('not logged in');
  //     btnLogout.classList.add('hide');
  //     btnLogin.classList.remove('hide');
  //     btnSignUp.classList.remove('hide');
  //   }
  // })
