<template>
  <div class="container">
    <h1 id="bigOne">{{ bigOneValue }}</h1>
    <input id="txtEmail" type="email" v-model="txtEmail" />

    <input id="txtPassword" type="password" v-model="txtPassword" />

    <button
      id="btnLogin"
      v-if="!userAuthen"
      class="btn btn-action"
      @click="logIn"
      >
      Log in
    </button>

    <button
      id="btnSignUp"
      v-if="!userAuthen"
      class="btn btn-secondary"
      @click="signUp"
      >
      Sign Up
    </button>

    <button
      id="btnLogout"
      v-if="userAuthen"
      class="btn btn-action"
      @click="logOut"
      >
      Log out
    </button>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import store from './../store/store';
  export default {
    data () {
      return {
        bigOneValue: 'is it working?',
        userAuthen: false,
        txtEmail: '',
        txtPassword: ''
      }
    },
    computed: {
      userAuth1() {
        dbRef.on('value', snap => bigOne.innerText = snap.val());
      },
      // userAuthState() {
      //   console.log('userAuthState');
      //   firebase.auth().onAuthStateChanged(firebaseUser => {
      //     if(firebaseUser) {
      //       console.log(firebaseUser);
      //       this.userAuthen = true;
      //     } else {
      //       console.log('not logged in');
      //       this.userAuthen = false;
      //     }
      //   })
      // }
    },
    methods: {
      logIn() {
        console.log(this.$store.state.userAuthenticated);
          //Get email and password
          const email = this.txtEmail;
          const pass = this.txtPassword;
          const auth = firebase.auth();
          //Sign in
          const promise = auth.signInWithEmailAndPassword(email, pass);
          const promResonse = promise;
          // console.log(promResonse);
          promise.catch(e => console.log(e.message));
          console.log('user attempt to log in');
          console.log(this.$store.state.userAuthenticated);
          this.userAuthen = !this.userAuthen;
      },
      logOut() {
          firebase.auth().signOut();
          this.userAuthen = !this.userAuthen;
      },
      signUp() {
          //Get email and pass
          console.log(this.$store.state.userAuthenticated);
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();
          //Sign in
          const promise = auth.createUserWithEmailAndPassword(email, pass);
          const promResonse = promise;
          // console.log(promResonse);
          promise.catch(e => console.log(e.message));
          console.log('user attempt to sign up');
          console.log(this.$store.state.userAuthenticated);
          this.userAuthen = !this.userAuthen;
      }
    }
    // const config = {
    //     apiKey: "AIzaSyDd3wwVthxZRercXD1zfPVKgLTp33WtDKI",
    //     authDomain: "progressive-web-app-be867.firebaseapp.com",
    //     databaseURL: "https://progressive-web-app-be867.firebaseio.com",
    //     projectId: "progressive-web-app-be867",
    //     storageBucket: "progressive-web-app-be867.appspot.com",
    //     messagingSenderId: "1049004695038"
    //   };
    //   firebase.initializeApp(config);

      // var bigOne = document.getElementById('bigOne');
      // var dbRef = firebase.database().ref().child('text');
      // dbRef.on('value', snap => bigOne.innerText = snap.val());

      // Get elements
      // var txtEmail = document.getElementById('txtEmail');
      // var txtPassword = document.getElementById('txtPassword')
      // var btnLogin = document.getElementById('btnLogin')
      // var btnSignUp = document.getElementById('btnSignUp')
      // var btnLogout = document.getElementById('btnLogout')

      // Add login event
      // btnLogin.addEventListener('click', e => {
      //   //Get email and password
      //   const email = txtEmail.value;
      //   const pass = txtPassword.value;
      //   const auth = firebase.auth();
      //   //Sign in
      //   const promise = auth.signInWithEmailAndPassword(email, pass);
      //   promise.catch(e => console.log(e.message));
      // })

      // btnSignUp.addEventListener('click', e => {
      //   //Get email and pass
      //   const email = txtEmail.value;
      //   const pass = txtPassword.value;
      //   const auth = firebase.auth();
      //   //Sign in
      //   const promise = auth.createUserWithEmailAndPassword(email, pass);
      //   promise.catch(e => console.log(e.message));
      // })

      // btnLogout.addEventListener('click', e => {
      //   firebase.auth().signOut();
      // });

      // Add a realtime listener
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
  }
</script>

<style>

</style>
